// ============================================
// Interview Prep - Main Application Script
// ============================================

(function () {
  'use strict';

  // Combine all questions from data files
  const allQuestions = [
    ...(window.JAVASCRIPT_QUESTIONS || []),
    ...(window.ANGULAR_QUESTIONS || []),
  ];

  // State
  let filteredQuestions = [...allQuestions];
  let currentQuestion = null;
  let bookmarks = JSON.parse(localStorage.getItem('interview-bookmarks') || '[]');
  let showBookmarksOnly = false;

  // DOM Elements
  const sidebar = document.getElementById('sidebar');
  const sidebarToggle = document.getElementById('sidebarToggle');
  const sidebarNav = document.getElementById('sidebarNav');
  const toggleAllBtn = document.getElementById('toggleAllBtn');
  let allExpanded = true;
  const topicFilter = document.getElementById('topicFilter');
  const levelFilter = document.getElementById('levelFilter');
  const searchInput = document.getElementById('searchInput');
  const bookmarkFilter = document.getElementById('bookmarkFilter');
  const qaDisplay = document.getElementById('qaDisplay');
  const qaBadge = document.getElementById('qaBadge');
  const qaLevel = document.getElementById('qaLevel');
  const qaBookmark = document.getElementById('qaBookmark');
  const qaQuestion = document.getElementById('qaQuestion');
  const qaAnswer = document.getElementById('qaAnswer');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  // Initialize
  function init() {
    applyFilters();
    bindEvents();
    // Auto-show first question
    if (filteredQuestions.length > 0) {
      showQuestion(filteredQuestions[0]);
    }
  }

  // Bind events
  function bindEvents() {
    const overlay = document.getElementById('sidebarOverlay');

    function closeSidebar() {
      sidebar.classList.add('collapsed');
      overlay.classList.remove('active');
    }

    function openSidebar() {
      sidebar.classList.remove('collapsed');
      if (window.innerWidth <= 900) {
        overlay.classList.add('active');
      }
    }

    sidebarToggle.addEventListener('click', () => {
      if (sidebar.classList.contains('collapsed')) {
        openSidebar();
      } else {
        closeSidebar();
      }
    });

    overlay.addEventListener('click', closeSidebar);

    // Handle resize: auto-collapse sidebar on mobile, toggle overlay
    window.addEventListener('resize', () => {
      const isMobile = window.innerWidth <= 900;
      const isOpen = !sidebar.classList.contains('collapsed');
      if (isMobile && isOpen) {
        sidebar.classList.add('collapsed');
        overlay.classList.remove('active');
      }
      if (!isMobile) {
        sidebar.classList.remove('collapsed');
        overlay.classList.remove('active');
      }
    });

    const searchClear = document.getElementById('searchClear');

    topicFilter.addEventListener('change', applyFilters);
    levelFilter.addEventListener('change', applyFilters);
    searchInput.addEventListener('input', () => {
      searchClear.classList.toggle('visible', searchInput.value.length > 0);
      debounce(applyFilters, 300)();
    });
    searchClear.addEventListener('click', () => {
      searchInput.value = '';
      searchClear.classList.remove('visible');
      searchInput.focus();
      applyFilters();
    });

    bookmarkFilter.addEventListener('click', () => {
      showBookmarksOnly = !showBookmarksOnly;
      bookmarkFilter.classList.toggle('active', showBookmarksOnly);
      bookmarkFilter.querySelector('i').className = showBookmarksOnly ? 'fas fa-bookmark' : 'far fa-bookmark';
      applyFilters();
    });

    toggleAllBtn.addEventListener('click', () => {
      allExpanded = !allExpanded;
      toggleAllGroups(allExpanded);
      toggleAllBtn.querySelector('i').className = allExpanded ? 'fas fa-angle-double-up' : 'fas fa-angle-double-down';
      toggleAllBtn.title = allExpanded ? 'Collapse All' : 'Expand All';
    });

    qaBookmark.addEventListener('click', () => {
      if (!currentQuestion) return;
      toggleBookmark(currentQuestion.id);
      updateBookmarkButton();
      renderSidebar();
    });

    prevBtn.addEventListener('click', () => navigateQuestion(-1));
    nextBtn.addEventListener('click', () => navigateQuestion(1));

    document.addEventListener('keydown', (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT') return;
      if (e.key === 'ArrowLeft') navigateQuestion(-1);
      if (e.key === 'ArrowRight') navigateQuestion(1);
    });
  }

  // Filters
  function applyFilters() {
    const topic = topicFilter.value;
    const level = levelFilter.value;
    const search = searchInput.value.toLowerCase().trim();

    filteredQuestions = allQuestions.filter(q => {
      if (topic !== 'all' && q.topic !== topic) return false;
      if (level !== 'all' && q.level !== level) return false;
      if (showBookmarksOnly && !bookmarks.includes(q.id)) return false;
      if (search && !q.question.toLowerCase().includes(search) && !stripHtml(q.answer).toLowerCase().includes(search)) return false;
      return true;
    });

    renderSidebar();

    if (filteredQuestions.length > 0) {
      // If no current question or current is not in filtered list, show first
      if (!currentQuestion || !filteredQuestions.find(q => q.id === currentQuestion.id)) {
        showQuestion(filteredQuestions[0]);
      }
    } else {
      qaDisplay.style.display = 'none';
      currentQuestion = null;
    }
  }

  // Strip HTML for search
  function stripHtml(html) {
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
  }

  // Render sidebar
  function renderSidebar() {
    const groups = groupQuestions(filteredQuestions);
    sidebarNav.innerHTML = '';

    if (filteredQuestions.length === 0) {
      sidebarNav.innerHTML = '<div style="padding:20px;color:#64748b;text-align:center;font-size:13px;">No questions match your filters.</div>';
      return;
    }

    groups.forEach(group => {
      const groupEl = document.createElement('div');
      groupEl.className = 'nav-group';

      const header = document.createElement('div');
      header.className = 'nav-group-header';
      header.innerHTML = `
        <span><i class="fas fa-chevron-down group-icon"></i> ${group.label}</span>
        <span class="group-badge">${group.items.length}</span>
      `;

      const itemsContainer = document.createElement('div');
      itemsContainer.className = 'nav-group-items';

      group.items.forEach(q => {
        const item = document.createElement('div');
        item.className = 'nav-item' + (currentQuestion && currentQuestion.id === q.id ? ' active' : '');
        const isBookmarked = bookmarks.includes(q.id);
        item.innerHTML = `
          <span class="level-dot ${q.level}"></span>
          <span class="q-number">Q${q.id}.</span>
          ${truncate(q.question, 40)}
          ${isBookmarked ? '<i class="fas fa-bookmark bookmarked-icon"></i>' : ''}
        `;
        item.addEventListener('click', () => showQuestion(q));
        itemsContainer.appendChild(item);
      });

      // Set max-height for animation
      header.addEventListener('click', () => {
        const icon = header.querySelector('.group-icon');
        const isCollapsed = itemsContainer.classList.contains('collapsed');
        if (isCollapsed) {
          itemsContainer.classList.remove('collapsed');
          itemsContainer.style.maxHeight = itemsContainer.scrollHeight + 'px';
          icon.classList.remove('collapsed');
        } else {
          itemsContainer.style.maxHeight = itemsContainer.scrollHeight + 'px';
          requestAnimationFrame(() => {
            itemsContainer.classList.add('collapsed');
            icon.classList.add('collapsed');
          });
        }
      });

      groupEl.appendChild(header);
      groupEl.appendChild(itemsContainer);
      sidebarNav.appendChild(groupEl);

      // Set initial max-height
      requestAnimationFrame(() => {
        itemsContainer.style.maxHeight = itemsContainer.scrollHeight + 'px';
      });
    });
  }

  // Group questions by topic + level
  function groupQuestions(questions) {
    const order = [
      { topic: 'javascript', level: 'beginner', label: 'JS - Beginner (0-1 yr)' },
      { topic: 'javascript', level: 'intermediate', label: 'JS - Intermediate (1-2 yr)' },
      { topic: 'javascript', level: 'advanced', label: 'JS - Advanced (2+ yr)' },
      { topic: 'angular', level: 'beginner', label: 'Angular - Beginner (0-1 yr)' },
      { topic: 'angular', level: 'intermediate', label: 'Angular - Intermediate (1-2 yr)' },
      { topic: 'angular', level: 'advanced', label: 'Angular - Advanced (2+ yr)' },
    ];

    return order
      .map(g => ({
        ...g,
        items: questions.filter(q => q.topic === g.topic && q.level === g.level),
      }))
      .filter(g => g.items.length > 0);
  }

  // Show question
  function showQuestion(q) {
    currentQuestion = q;
    qaDisplay.style.display = 'block';

    qaBadge.textContent = q.topic === 'javascript' ? 'JavaScript' : 'Angular';
    qaBadge.className = 'qa-badge ' + q.topic;

    const levelLabels = { beginner: 'Beginner', intermediate: 'Intermediate', advanced: 'Advanced' };
    qaLevel.textContent = levelLabels[q.level];
    qaLevel.className = 'qa-level ' + q.level;

    qaQuestion.textContent = 'Q' + q.id + '. ' + q.question;
    qaAnswer.innerHTML = q.answer;

    updateBookmarkButton();
    updateNavButtons();

    // Highlight active in sidebar
    document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
    const items = document.querySelectorAll('.nav-item');
    items.forEach(el => {
      if (el.querySelector('.q-number')?.textContent === 'Q' + q.id + '.') {
        el.classList.add('active');
        el.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      }
    });

    // Scroll content to top
    document.getElementById('content').scrollTop = 0;

    // Auto-close sidebar on mobile
    if (window.innerWidth <= 900) {
      sidebar.classList.add('collapsed');
      document.getElementById('sidebarOverlay').classList.remove('active');
    }
  }

  // Navigate
  function navigateQuestion(direction) {
    if (!currentQuestion) {
      if (filteredQuestions.length > 0) showQuestion(filteredQuestions[0]);
      return;
    }
    const idx = filteredQuestions.findIndex(q => q.id === currentQuestion.id);
    const nextIdx = idx + direction;
    if (nextIdx >= 0 && nextIdx < filteredQuestions.length) {
      showQuestion(filteredQuestions[nextIdx]);
    }
  }

  function updateNavButtons() {
    if (!currentQuestion) return;
    const idx = filteredQuestions.findIndex(q => q.id === currentQuestion.id);
    prevBtn.disabled = idx <= 0;
    nextBtn.disabled = idx >= filteredQuestions.length - 1;
  }

  // Bookmarks
  function toggleBookmark(id) {
    const idx = bookmarks.indexOf(id);
    if (idx === -1) bookmarks.push(id);
    else bookmarks.splice(idx, 1);
    localStorage.setItem('interview-bookmarks', JSON.stringify(bookmarks));
  }

  function updateBookmarkButton() {
    if (!currentQuestion) return;
    const isBookmarked = bookmarks.includes(currentQuestion.id);
    qaBookmark.classList.toggle('bookmarked', isBookmarked);
    qaBookmark.querySelector('i').className = isBookmarked ? 'fas fa-bookmark' : 'far fa-bookmark';
  }

  // Expand/Collapse all
  function toggleAllGroups(expand) {
    document.querySelectorAll('.nav-group-items').forEach(el => {
      const icon = el.previousElementSibling.querySelector('.group-icon');
      if (expand) {
        el.classList.remove('collapsed');
        el.style.maxHeight = el.scrollHeight + 'px';
        icon.classList.remove('collapsed');
      } else {
        el.classList.add('collapsed');
        icon.classList.add('collapsed');
      }
    });
  }

  // Utilities
  function truncate(str, len) {
    return str.length > len ? str.substring(0, len) + '...' : str;
  }

  function debounce(fn, delay) {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => fn.apply(this, args), delay);
    };
  }

  // Start
  init();
})();

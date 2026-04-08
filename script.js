// ============================================
// Interview Prep - Main Application Script
// ============================================

(function () {
  'use strict';

  // Combine all questions from data files
  const allQuestions = [
    ...(window.JAVASCRIPT_QUESTIONS || []),
    ...(window.TYPESCRIPT_QUESTIONS || []),
    ...(window.ANGULAR_QUESTIONS || []),
  ];

  // State
  let filteredQuestions = [...allQuestions];
  let currentQuestion = null;
  let bookmarks = JSON.parse(localStorage.getItem('interview-bookmarks') || '[]');
  let showBookmarksOnly = false;
  let currentMatcher = null;

  // DOM Elements
  const sidebar = document.getElementById('sidebar');
  const sidebarToggle = document.getElementById('sidebarToggle');
  const sidebarNav = document.getElementById('sidebarNav');
  const toggleAllBtn = document.getElementById('toggleAllBtn');
  let allExpanded = true;
  const topicFilter = document.getElementById('topicFilter');
  const levelFilter = document.getElementById('levelFilter');
  const searchInput = document.getElementById('searchInput');
  const matchCaseBtn = document.getElementById('matchCaseBtn');
  const matchWordBtn = document.getElementById('matchWordBtn');
  let matchCase = false;
  let matchWord = false;
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

    matchCaseBtn.addEventListener('click', () => {
      matchCase = !matchCase;
      matchCaseBtn.classList.toggle('active', matchCase);
      matchCaseBtn.setAttribute('aria-pressed', matchCase);
      applyFilters();
    });
    matchWordBtn.addEventListener('click', () => {
      matchWord = !matchWord;
      matchWordBtn.classList.toggle('active', matchWord);
      matchWordBtn.setAttribute('aria-pressed', matchWord);
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
    const rawSearch = searchInput.value.trim();

    let searchMatcher = null;
    if (rawSearch) {
      const escaped = rawSearch.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const pattern = matchWord ? '\\b' + escaped + '\\b' : escaped;
      const flags = matchCase ? '' : 'i';
      try {
        searchMatcher = new RegExp(pattern, flags);
      } catch (e) {
        searchMatcher = null;
      }
    }
    currentMatcher = searchMatcher;

    filteredQuestions = allQuestions.filter(q => {
      if (topic !== 'all' && q.topic !== topic) return false;
      if (level !== 'all' && q.level !== level) return false;
      if (showBookmarksOnly && !bookmarks.includes(q.id)) return false;
      if (searchMatcher) {
        const question = q.question;
        const answer = stripHtml(q.answer);
        if (!searchMatcher.test(question) && !searchMatcher.test(answer)) return false;
      }
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

  // Escape text for safe insertion into innerHTML
  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  // Return plain text with matches wrapped in <mark> (output is HTML-safe)
  function highlightText(text, matcher) {
    const safe = String(text || '');
    if (!matcher) return escapeHtml(safe);
    const g = new RegExp(matcher.source, matcher.flags.indexOf('g') === -1 ? matcher.flags + 'g' : matcher.flags);
    let out = '';
    let last = 0;
    let m;
    while ((m = g.exec(safe)) !== null) {
      if (m[0].length === 0) { g.lastIndex++; continue; }
      out += escapeHtml(safe.slice(last, m.index)) + '<mark class="search-hit">' + escapeHtml(m[0]) + '</mark>';
      last = m.index + m[0].length;
    }
    out += escapeHtml(safe.slice(last));
    return out;
  }

  // Lightweight syntax highlighter for <pre><code> blocks (JS/TS/Angular-friendly)
  const CODE_TOKEN_RE = /(\/\/[^\n]*|\/\*[\s\S]*?\*\/)|(`(?:\\[\s\S]|[^`\\])*`|"(?:\\.|[^"\\\n])*"|'(?:\\.|[^'\\\n])*')|\b(var|let|const|function|return|if|else|for|while|do|switch|case|break|continue|new|class|extends|super|this|typeof|instanceof|in|of|null|undefined|true|false|try|catch|finally|throw|async|await|yield|import|export|from|as|default|void|delete|interface|type|enum|public|private|protected|readonly|static|implements|namespace|declare|abstract|keyof|infer|never|unknown|any|number|string|boolean|symbol|bigint|object)\b|\b(\d+(?:\.\d+)?)\b|([A-Za-z_$][\w$]*)(?=\s*\()/g;

  function tokenizeCode(src) {
    let out = '';
    let last = 0;
    let m;
    CODE_TOKEN_RE.lastIndex = 0;
    while ((m = CODE_TOKEN_RE.exec(src)) !== null) {
      if (m.index > last) out += escapeHtml(src.slice(last, m.index));
      let cls;
      if (m[1]) cls = 'tok-comment';
      else if (m[2]) cls = 'tok-string';
      else if (m[3]) cls = 'tok-keyword';
      else if (m[4]) cls = 'tok-number';
      else cls = 'tok-fn';
      out += '<span class="' + cls + '">' + escapeHtml(m[0]) + '</span>';
      last = m.index + m[0].length;
    }
    out += escapeHtml(src.slice(last));
    return out;
  }

  function highlightCodeBlocks(root) {
    if (!root) return;
    root.querySelectorAll('pre code').forEach(block => {
      block.innerHTML = tokenizeCode(block.textContent);
    });
  }

  // Walk text nodes inside an element and wrap matches in <mark>
  function highlightInElement(root, matcher) {
    if (!matcher || !root) return;
    const skipTags = { SCRIPT: 1, STYLE: 1, MARK: 1 };
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: function (node) {
        if (!node.nodeValue || !node.parentNode) return NodeFilter.FILTER_REJECT;
        if (skipTags[node.parentNode.nodeName]) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    const nodes = [];
    let n;
    while ((n = walker.nextNode())) nodes.push(n);

    const g = new RegExp(matcher.source, matcher.flags.indexOf('g') === -1 ? matcher.flags + 'g' : matcher.flags);
    nodes.forEach(node => {
      const text = node.nodeValue;
      g.lastIndex = 0;
      if (!g.test(text)) return;
      g.lastIndex = 0;
      const frag = document.createDocumentFragment();
      let last = 0;
      let m;
      while ((m = g.exec(text)) !== null) {
        if (m[0].length === 0) { g.lastIndex++; continue; }
        if (m.index > last) frag.appendChild(document.createTextNode(text.slice(last, m.index)));
        const mark = document.createElement('mark');
        mark.className = 'search-hit';
        mark.textContent = m[0];
        frag.appendChild(mark);
        last = m.index + m[0].length;
      }
      if (last < text.length) frag.appendChild(document.createTextNode(text.slice(last)));
      node.parentNode.replaceChild(frag, node);
    });
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
          ${highlightText(truncate(q.question, 40), currentMatcher)}
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
      { topic: 'typescript', level: 'beginner', label: 'TS - Beginner (0-1 yr)' },
      { topic: 'typescript', level: 'intermediate', label: 'TS - Intermediate (1-2 yr)' },
      { topic: 'typescript', level: 'advanced', label: 'TS - Advanced (2+ yr)' },
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

    const topicLabels = { javascript: 'JavaScript', typescript: 'TypeScript', angular: 'Angular' };
    qaBadge.textContent = topicLabels[q.topic] || q.topic;
    qaBadge.className = 'qa-badge ' + q.topic;

    const levelLabels = { beginner: 'Beginner', intermediate: 'Intermediate', advanced: 'Advanced' };
    qaLevel.textContent = levelLabels[q.level];
    qaLevel.className = 'qa-level ' + q.level;

    qaQuestion.innerHTML = 'Q' + q.id + '. ' + highlightText(q.question, currentMatcher);
    qaAnswer.innerHTML = q.answer;
    highlightCodeBlocks(qaAnswer);
    highlightInElement(qaAnswer, currentMatcher);

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

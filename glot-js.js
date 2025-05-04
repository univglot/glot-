document.addEventListener('DOMContentLoaded', () => {
  const m = document,
    q = m.querySelector.bind(m),
    qa = m.querySelectorAll.bind(m);

  const f = q('.major-tab.active');
  f && ((c = f.dataset.category) => {
    q(`#category-${c}-content`).classList.add('active');
    q(`#category-${c}-tabs`).classList.add('active');
    q(`#category-${c}-tabs .tab-buttons button`)?.click();
  })();

  qa('.major-tab').forEach(t =>
    t.addEventListener('click', function () {
      const c = this.dataset.category;
      qa('.major-tab').forEach(t => t.classList.remove('active'));
      this.classList.add('active');
      qa('.category-section').forEach(s => s.classList.remove('active'));
      q(`#category-${c}-content`).classList.add('active');
      q(`#category-${c}-tabs`).classList.add('active');
      q(`#category-${c}-tabs .tab-buttons button`)?.click();
    })
  );

  qa('.tab-buttons button').forEach(b =>
    b.addEventListener('click', function () {
      const t = this.dataset.day,
        c = this.closest('.category-section').id.replace('-tabs', '');
      this.closest('.tab-buttons').querySelectorAll('button').forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      qa(`#${c}-content .tab-pane`).forEach(p => p.classList.remove('active'));
      q(`#${c}-content #${t}`).classList.add('active');
    })
  );
});

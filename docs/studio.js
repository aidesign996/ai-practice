document.querySelectorAll('[data-language]').forEach(a => a.hash = location.hash);
document.querySelectorAll('[data-copy]').forEach(button => button.addEventListener('click', async () => {
  const text = document.getElementById(button.dataset.copy).textContent;
  const status = button.nextElementSibling;
  try { await navigator.clipboard.writeText(text); status.textContent = button.dataset.success; }
  catch { status.textContent = button.dataset.failure; }
}));

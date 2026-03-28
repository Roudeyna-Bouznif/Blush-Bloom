document.querySelectorAll('.zoom-btn').forEach(btn => 
  btn.onclick = () => document.getElementById(btn.dataset.target)?.scrollIntoView({ behavior: 'smooth' })
);

function addComment() {
  const txt = document.querySelector('.comment-box textarea').value.trim();
  if (txt) {
      const div = document.createElement('div');
      div.className = 'comment';
      div.innerHTML = `<p>${txt}</p><small>Posted on ${new Date().toLocaleString()}</small>`;
      document.getElementById('comment-list').appendChild(div);
      document.querySelector('.comment-box textarea').value = '';
  }
}
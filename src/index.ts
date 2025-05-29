import './styles/main.scss';
import tools from './data/tools.json';

const toolList = document.getElementById('tool-list') as HTMLElement;

tools.forEach((tool) => {
  const item = document.createElement('div');
  item.className = 'tool-card';
  item.innerHTML = `
    <h3>${tool.name}</h3>
    <p>${tool.description}</p>
  `;
  toolList.appendChild(item);
});

// Theme toggle
const themeToggle = document.getElementById('theme-toggle')!;
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const icon = themeToggle.querySelector('i');
  icon?.classList.toggle('fa-sun');
  icon?.classList.toggle('fa-moon');
});

// NAVBAR TOGGLE
const navMenu = document.getElementById('nav-menu');
const toggleBtn = document.getElementById('toggleBtn');
toggleBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    toggleBtn.innerHTML = navMenu.classList.contains('active') ? '<i class="uil uil-multiply"></i>' : '<i class="uil uil-bars"></i>';
});

// SCROLL TO SECTION
function scrollToTarget(id) {
    const target = document.getElementById(id);
    target.scrollIntoView({ behavior: 'smooth' });
}
function scrollToHome(){ scrollToTarget('home'); }
function scrollToAbout(){ scrollToTarget('about'); }
function scrollToProjects(){ scrollToTarget('projects'); }
function scrollToContact(){ scrollToTarget('contact'); }

// SCROLLREVEAL
ScrollReveal().reveal('.featured-text, .profile-image', { duration:1500, distance:'50px', origin:'bottom', reset:true });
ScrollReveal().reveal('.skills span', { duration:1500, interval:100 });
ScrollReveal().reveal('.project-box', { duration:1500, distance:'50px', origin:'bottom', reset:true });
ScrollReveal().reveal('.contact-info, .contact-form', { duration:1500, distance:'50px', origin:'bottom', reset:true });

// EMAILJS FORM
emailjs.init("gZBrTo_lOBpeEXt_s");
document.getElementById('contact-form').addEventListener('submit', function(e){
    e.preventDefault();
    emailjs.sendForm('service_k8lbwkf','template_oqkld7p', this)
    .then(()=> alert("✅ Message sent successfully!"))
    .catch(err => alert("❌ Failed: "+JSON.stringify(err)));
});
// ---------- TO-DO LIST ----------
const todoInput = document.getElementById('todo-input');
const addTaskBtn = document.getElementById('add-task');
const todoList = document.getElementById('todo-list');

addTaskBtn.addEventListener('click', () => {
    const task = todoInput.value.trim();
    if(task){
        const li = document.createElement('li');
        li.innerHTML = `${task} <button>Delete</button>`;
        li.addEventListener('click', () => li.classList.toggle('completed'));
        li.querySelector('button').addEventListener('click', e => {
            e.stopPropagation();
            li.remove();
        });
        todoList.appendChild(li);
        todoInput.value = '';
    }
});


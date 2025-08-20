function showTab(tabName) {
    const tabs = document.querySelectorAll('.tab-content');
    const buttons = document.querySelectorAll('.tab-button');
    
    tabs.forEach(tab => tab.classList.remove('active'));
    buttons.forEach(button => button.classList.remove('active'));
    
    document.getElementById(tabName).classList.add('active');
    event.target.classList.add('active');
}

function showProjectDetail(projectId) {
    showTab('all-projects');
    
    const targetProject = document.querySelector(`#full-projects .project h1`);
    if (targetProject) {
        setTimeout(() => {
            let projectElement;
            switch(projectId) {
                case 'lp-morph':
                    projectElement = document.querySelector('#full-projects .project:nth-child(1)');
                    break;
                case 'carnage-invader':
                    projectElement = document.querySelector('#full-projects .project:nth-child(2)');
                    break;
                case 'stochaostic':
                    projectElement = document.querySelector('#full-projects .project:nth-child(3)');
                    break;
                case 'transformer':
                    projectElement = document.querySelector('#full-projects .project:nth-child(4)');
                    break;
                case 'aec':
                    projectElement = document.querySelector('#full-projects .project:nth-child(5)');
                    break;
                case 'visualisation':
                    projectElement = document.querySelector('#full-projects .project:nth-child(6)');
                    break;
            }
            if (projectElement) {
                projectElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 100);
    }
    
    document.querySelector('.tab-button:nth-child(2)').classList.add('active');
    document.querySelector('.tab-button:nth-child(1)').classList.remove('active');
}
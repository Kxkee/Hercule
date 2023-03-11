const Hercule = {
    name: 'Hercule',
    job: 'Demi-dieu',
    age : 35,
    department : 75,
    arm : 60.5,
    inRelationship : true,
    friends : [
        'Jupiter',
        'Junon',
        'Alcmène',
        'Déjanire'
    ]
}


const app = {
    profil : base.fillProfil(Hercule),
    displayFriends : base.printFriends(Hercule.friends),
    displayBestFriend : base.setBestFriend(Hercule.friends[0]),
    generateTitle : function() {
        const header = document.getElementById('header-banner');
        const title = document.createElement('h1');
        title.classList.add('banner__title');
        title.textContent = 'Vous consultez le profil de Hercule';
        header.append(title);
    },
    allWorks : function() {
        for(let i = 0; i < 11; i++) {
            base.displayWork(i)
        }
    },
    isAvailable : function() {
        const available = document.getElementById('availability');
        const hour = base.getHour();
        if(hour < 8) {
            available.textContent = 'Non disponible';
            available.classList.add('off');
        }
        else if(hour > 20) {
            available.textContent = 'Non disponible';
            available.classList.add('off');
        } else {
            available.textContent = 'Disponible';
            available.classList.remove('off');
        }
    },
    generatePseudo : function(name, depart) {
        const result = `${name}-du-${depart}`;
        const profileName = document.getElementById('profil-name');
        profileName.textContent = result;
    },
    toggleMenu : function() {
        const menuClick = document.getElementById('menu-toggler');
        menuClick.addEventListener('click', () => {
            const headerBanner = document.getElementById('header-banner');
            headerBanner.classList.toggle('banner--open');
        })

        const form = document.getElementById('contact');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Hercule ne souhaite pas être dérangé');
        })
    },
    displayVote : function() {
        const hercule = base.vote.hercule;
        const cesar = base.vote.cesar;

        const herculeResult = Math.round(hercule / (hercule + cesar) * 100);
        const cesarResult = Math.round(cesar / (hercule + cesar) * 100);

        const herculeSection = document.getElementById('trends-hercule');
        const herculePopularity = herculeSection.querySelector('p');
        herculePopularity.textContent = `${herculeResult}%`;
        const herculeBar = herculeSection.querySelector('div');
        herculeBar.style.width = `${herculeResult}%`;

        const cesarSection = document.getElementById('trends-cesar');
        const cesarPopularity = cesarSection.querySelector('p');
        cesarPopularity.textContent = `${cesarResult}%`;
        const cesarBar = cesarSection.querySelector('div');
        cesarBar.style.width = `${cesarResult}%`;

    },
    displayActivities : function() {
        const activitiesSection = document.getElementById('activities');
        activitiesSection.classList.remove('hidden')
        const list = activitiesSection.querySelector('ul');
        for(let activity of base.activities) {
            if(activity.finished === true) {
            const title = document.createElement('li');
            title.textContent = activity.title;
            list.append(title);

            }
        }
    },
    init : function() {
        this.profil;
        this.displayFriends;
        this.displayBestFriend;
        this.generateTitle();
        this.allWorks();
        this.isAvailable();
        this.generatePseudo(Hercule.name, Hercule.departement);
        this.toggleMenu();
        this.displayVote();
        this.displayActivities();
    }

}

app.init();



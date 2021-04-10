const linkList = document.querySelector('.ul');
const small = document.querySelectorAll('li small');
const backgroundImage = document.querySelectorAll('.background__image');
const iconList = document.querySelector('.toggle__container');

const dot = document.querySelectorAll('.cycle__link');

linkList.addEventListener('click', e => {
    const targeted = e.target.closest('li');
    const id = targeted.id;
    const listDOM = document.getElementById(id).querySelector('small');
    addShow(listDOM);
});

const addShow = (listDOM) => {
    if (listDOM) {
        small.forEach(small => {
            small.classList.remove('show');
        });
    }
    listDOM.classList.add('show');

};

// IMAGES SLIDE SHOW

iconList.addEventListener('click', e => {
    const targetedList = e.target.parentElement;
    const targetedIcon = targetedList.dataset.id;

    if (targetedIcon) {
        addBackground(targetedIcon);

        const cycle__link = targetedList.children[1];
        addDot(cycle__link);
    }
});

const addBackground = (elem) => {
    const elementID = document.getElementById(elem);

    // REMOVE ALL ACTIVE FROM THE BACKGROUND IMAGE
    backgroundImage.forEach(image => {
        image.classList.remove('active');
    });

    elementID.classList.add('active');


};

const addDot = (link) => {
    if (link) {

        dot.forEach(link => link.classList.remove('hide'));
    }
    link.classList.add('hide');
};
const addButton = document.querySelector('#add');

const updateLSData = () => {
    const textAreaData = document.querySelectorAll('textarea');
    const notes = [];

    textAreaData.forEach( (note) => {
        return notes.push(note.value);
    })

    localStorage.setItem('notes', JSON.stringify(notes));

}

const addNewNote = (text = "") => {
    const note = document.createElement('div');
    note.classList.add('note');

    const htmlData = `
    <div class="submain">
    <button class="btn1" id="delete"><i class="fas fa-trash-alt"></i></button>
    <button class="btn1" id="edit"><i class="fas fa-edit"></i></button>

    <div class="savetext ${text ? "" : "hidden"}"></div>
    <textarea  class="testarea ${text ? "hidden" : ""}">Write something here ..</textarea>

    </div>`;
    note.insertAdjacentHTML('afterbegin', htmlData);
    // console.log(note)

    const editButton = note.querySelector('#edit');
    const deleteButton = note.querySelector('#delete');
    const mainDiv = note.querySelector('.savetext');
    const textarea = note.querySelector('textarea');

    deleteButton.addEventListener('click', () => {
        note.remove();
        updateLSData();
    })

    textarea.value = text;
    mainDiv.innerHTML = text;

    //edit 

    editButton.addEventListener('click', () => {
        mainDiv.classList.toggle('hidden');
        textarea.classList.toggle('hidden');
    })


    textarea.addEventListener('change', (event) => {
        const value = event.target.value;
        // console.log(value);
        mainDiv.innerHTML = value;
        updateLSData();
    })

    document.body.appendChild(note);
}


//getting data from local storage 
const notes = JSON.parse(localStorage.getItem('notes'));

if(notes){ notes.forEach((note) => addNewNote(note)) };


addButton.addEventListener('click', () => addNewNote() );
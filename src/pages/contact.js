
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function makeInfo(){
    const Info = document.createElement("div");
    const PhoneNumber = document.createElement("p");
    const Email = document.createElement("p");
    const Address = document.createElement("p");


    PhoneNumber.textContent = "Phone Number: 973-409-3313";
    Email.textContent = "Email: PancakeHome@gmail.com";
    Address.textContent = "Address: 221B Baker Street";


    Info.appendChild(PhoneNumber);
    Info.appendChild(Email);
    Info.appendChild(Address);

    Info.classList.add("info");

    return Info;
}

function makeForm(){
    const Form = document.createElement("div");
    Form.setAttribute('id', 'form');
    Form.setAttribute('action', '#'); // Specify form action
    
    // Create input field for name
    const NameRow = document.createElement("div");
    NameRow.classList.add("row");
    const NameLabel = document.createElement('label');
    NameLabel.textContent = 'Name: ';
    const NameInput = document.createElement('input');
    NameInput.setAttribute('type', 'text');
    NameInput.setAttribute('name', 'name');
    NameInput.classList.add("input");
    NameRow.appendChild(NameLabel); // Append label to row
    NameRow.appendChild(NameInput); // Append input to row
    Form.appendChild(NameRow); // Append row to form


    // Create input field for Phone Number 
    const PhoneRow = document.createElement("div");
    PhoneRow.classList.add("row");
    const PhoneLabel = document.createElement('label');
    PhoneLabel.textContent = 'Phone Number: ';
    const PhoneInput= document.createElement('input');
    PhoneInput.setAttribute('type', 'tel');
    PhoneInput.setAttribute('name', 'phone');
    PhoneInput.classList.add("input");
    PhoneRow.appendChild(PhoneLabel); // Append label to row
    PhoneRow.appendChild(PhoneInput); // Append input to row
    Form.appendChild(PhoneRow); // Append row to form

    // Create input field for email
    const EmailRow = document.createElement("div");
    EmailRow.classList.add("row");
    const EmailLabel = document.createElement('label');
    EmailLabel.textContent = 'Email: ';
    const EmailInput = document.createElement('input');
    EmailInput.setAttribute('type', 'email');
    EmailInput.setAttribute('name', 'email');
    EmailInput.classList.add("input");
    EmailRow.appendChild(EmailLabel); // Append label to row
    EmailRow.appendChild(EmailInput); // Append input to row
    Form.appendChild(EmailRow); // Append row to form


    // Create text area for open text input
    const MessageRow = document.createElement("div");
    MessageRow.classList.add("row");
    const MessageLabel = document.createElement('label');
    MessageLabel.textContent = 'Message: ';
    const MessageTextarea = document.createElement('textarea');
    MessageTextarea.setAttribute('type', 'message');
    MessageTextarea.setAttribute('name', 'message');
    MessageTextarea.setAttribute("id", 'msg-input');
    MessageTextarea.setAttribute('maxlength', '1200');

    const charCount = document.createElement("div");
    charCount.textContent="0/1200";
    charCount.setAttribute('id', 'char-count')

    MessageTextarea.addEventListener('input', function(){
        const maxLength = parseInt(MessageTextarea.getAttribute('maxlength'));
        const currentLength = MessageTextarea.value.length;
    
        // Update character count display
        charCount.textContent = currentLength + '/' + maxLength;
    
        // Check if character limit is exceeded
        if (currentLength > maxLength) {
            // Trim the excess characters
            MessageTextarea.value = MessageTextarea.value.slice(0, maxLength);
        }
    });


    MessageRow.appendChild(MessageLabel); // Append label to row
    MessageRow.appendChild(MessageTextarea); // Append input to row
    MessageRow.appendChild(charCount);
    Form.appendChild(MessageRow); // Append row to form


    // Create submit button
    const SubmitButton = document.createElement('input');
    SubmitButton.setAttribute('type', 'submit');
    SubmitButton.setAttribute('value', 'Submit');
    Form.appendChild(SubmitButton); // Append submit button to form

    // Add form submit event listener
    Form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission behavior
        // Handle form submission (e.g., validate inputs, submit data)
        let formData = new FormData(Form);
        let formDataObject = {};
        formData.forEach(function(value, key) {
            formDataObject[key] = value;
        });
        console.log('Form submitted:', formDataObject);
    });


    return Form;
}


function loadContact(){
    const Content = document.getElementById("content");
    const InfoTitle = document.createElement("h2");
    const Info = makeInfo();
    const FormTitle = document.createElement("h2");
    const Form = makeForm();

    InfoTitle.textContent = "Contact Us";
    FormTitle.textContent = "Form for Contact us"



    removeAllChildNodes(Content);

    Content.appendChild(InfoTitle);
    Content.appendChild(Info);
    Content.appendChild(FormTitle);
    Content.appendChild(Form);
    
}


export default loadContact;
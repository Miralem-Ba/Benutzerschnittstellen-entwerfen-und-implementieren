// Selektieren Sie die DOM-Elemente
const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconeClose = document.querySelector('.icone-close'); // Richtigstellung des Selektors

// Event-Listener für den Wechsel zum Registrierungsformular
registerLink.addEventListener('click', (event) => {
    event.preventDefault(); // Verhindere das Standardverhalten des Links
    wrapper.classList.add('active');
});

// Event-Listener für den Wechsel zum Anmeldeformular
loginLink.addEventListener('click', (event) => {
    event.preventDefault(); // Verhindere das Standardverhalten des Links
    wrapper.classList.remove('active');
});

// Event-Listener zum Öffnen des Popup-Anmeldefensters
btnPopup.addEventListener('click', (event) => {
    event.preventDefault(); // Verhindere das Standardverhalten des Buttons
    wrapper.classList.add('active-popup');
});

// Event-Listener zum Schließen des Popup-Anmeldefensters
iconeClose.addEventListener('click', (event) => {
    event.preventDefault(); // Verhindere das Standardverhalten des Icons
    wrapper.classList.remove('active-popup');
});

// Beispiel für die Anmeldung (nach erfolgreicher Überprüfung der Anmeldeinformationen)
// Hier kannst du die Benutzerauthentifizierung implementieren und sicherstellen, dass die Anmeldung erfolgreich ist.
function login() {
    // Annahme: Die Benutzerdaten wurden überprüft und sind korrekt.

    // Weiterleitung zur "Noten.html"-Seite
    window.location.href = 'Noten.html';
}

// Beispiel für die Registrierung (nach erfolgreicher Registrierung)
// Hier kannst du die Benutzerdaten in deiner Datenbank speichern und sicherstellen, dass die Registrierung erfolgreich ist.
function register() {
    // Annahme: Die Registrierung war erfolgreich und die Benutzerdaten wurden gespeichert.

    // Weiterleitung zur "Noten.html"-Seite
    window.location.href = 'Noten.html';
}

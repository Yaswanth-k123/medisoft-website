import twilio from 'twilio';

const accountSid = 'AC20f0a6ff7fd419439413d44162e93a62'; 
const authToken = 'd90f8648b23372a3a35f3e756729684d'; 
const client = twilio(accountSid, authToken);

function sendMessage(doctorPhoneNumber, patientName) {
    const message = `Patient ${patientName} is waiting. Please join the meeting with this link " https://meet.google.com/ada-vuxy-ick"`;
    
    client.messages
        .create({
            body: message,
            from: '+16318561544', 
            to: doctorPhoneNumber
        })
        .then(message => console.log(`Message sent to doctor: ${message.sid}`))
        .catch(err => console.error(`Error sending message: ${err}`));
}

const doctorPhoneNumber = '+916302896003';  
const patientName = 'User 1'; 
sendMessage(doctorPhoneNumber, patientName);

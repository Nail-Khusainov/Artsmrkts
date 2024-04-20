const submitForm = (formData) => {
    const endpoint = 'https://maschbot.site/cgi-bin3/cgi.php';

    return fetch(endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .catch(error => {
        console.error('Error:', error);
        throw new Error('Error submitting form data');
    });
};

export default submitForm;

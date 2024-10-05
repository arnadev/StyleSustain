document.querySelectorAll('.delete').forEach((button) => {
    button.addEventListener('click', async function() {
        const apparelID = this.id;
        console.log(apparelID);

        const response = await fetch(`/user/item`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'  // Set the correct content type
            },
            body: JSON.stringify({ 'apparelID': apparelID })  // Send the ID in the request body
        });

        if (response.ok) {
            window.location.href = '/item';  // Redirect after successful deletion
        }
    });
});

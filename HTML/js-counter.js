window.onload = async () => {
    var response = await fetch('https://txeycnmqmg.execute-api.us-east-1.amazonaws.com/Production/dynamodbmanager')
        .then(data => {
            return data.json()
        });
    document.getElementById('visitor-count').innerText = response.visitorCount;

};
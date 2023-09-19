var deferredPrompt;

if ("serviceWorker" in navigator) {
  console.log("serviceWorker is available");

  navigator.serviceWorker.register("/sw.js").then(() => {
    console.log("serviceWorker is registered...");
  });
}

// window.addEventListener("beforeinstallprompt", (event) => {
//   console.log("beforeinstallprompt fired");

//   event.preventDefault();
//   deferredPrompt = event;
//   return false;
// });

document.addEventListener("DOMContentLoaded", function () {
  // Get references to the button and text field
  var sendButton = document.getElementById("sendButton");
  var textField = document.getElementById("sample5"); // Replace with your textarea's actual ID

  // Add a click event listener to the button
  sendButton.addEventListener("click", function () {
    // Get the text from the text field
    var textContent = textField.value;

    // Perform any necessary data validation here

    /*
      // Send the data to a remote API using fetch or another AJAX method
      fetch('https://example.com/api/endpoint', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ content: textContent })
      })
      .then(response => response.json())
      .then(data => {
          // Handle the API response as needed
          console.log(data);
      })
      .catch(error => {
          console.error('Error:', error);
      });
      */

    // after fetch data and getting respons (from ChatGPT for example)

    let responseText = `
      Impostor syndrome, also known as impostor phenomenon or impostorism, is a psychological pattern in which individuals doubt their abilities, skills, and accomplishments, and have a persistent fear of being exposed as a fraud or "impostor." Despite evidence of their competence and success, people with impostor syndrome often believe that they don't deserve their achievements and that they've simply been lucky or that others have overestimated their abilities.

Impostor syndrome can manifest in various ways, including:

Self-doubt: Individuals with impostor syndrome frequently question their own competence, even when they are highly skilled and accomplished in their field.

Perfectionism: They may set unrealistically high standards for themselves and are never satisfied with their performance because they constantly fear making mistakes.

Overachievement: In an attempt to compensate for their perceived inadequacies, some people with impostor syndrome work excessively hard and strive for perfection in everything they do.

Discounting Success: They tend to attribute their successes to external factors, such as luck or help from others, rather than recognizing their own contributions and capabilities.

Fear of Failure: There is often a paralyzing fear of failure, which can prevent them from taking on new challenges or pursuing opportunities, as they worry about being exposed as a fraud.

Comparing to Others: They frequently compare themselves to others and assume that everyone else is more competent and knowledgeable, further exacerbating their feelings of inadequacy.

Impostor syndrome can affect people in various aspects of their lives, including their careers, relationships, and personal development. It can lead to stress, anxiety, low self-esteem, and hinder personal and professional growth. It's essential to recognize and address impostor syndrome to build self-confidence and achieve one's full potential. Therapy, coaching, and self-awareness exercises can help individuals overcome these feelings of fraudulence and develop a healthier self-perception.
      `;
  });
});

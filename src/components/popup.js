  window.addEventListener("message", (event) => {
    if (event.data.type === "SIDEQUEST_SELECTED_TEXT") {
      document.body.innerHTML += `<p>Selected: ${event.data.text}</p>`;
    }
  });
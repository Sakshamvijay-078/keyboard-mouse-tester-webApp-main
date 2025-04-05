let initial = 0;
$(document).ready(function () {
  $(document).on("keyup", function (event) {
    event.preventDefault();
    var key = event.keyCode;
    var key_pos = event.code;
    if (key == 175) {
      background();
    }
    if (key == 174) {
      background3();
    }
    if (key == 173) {
      background2();
    }
    if (key_pos == "NumpadEnter") {
      $(".keyPos" + key_pos).removeClass("press");
      keyNameDisplay(event.key);
    } else if (key >= 96 && key <= 105) {
      $(".key" + key).removeClass("press");
      keyNameDisplay("Num " + event.key);
    } else if (key_pos == "ControlRight") {
      $(".keyPos" + key_pos).removeClass("press");
      keyNameDisplay(event.key);
    } else if (key_pos == "Numpad4") {
      $(".keyPos" + key_pos).removeClass("press");
      keyNameDisplay(event.key);
    } else if (key_pos == "Numpad8") {
      $(".keyPos" + key_pos).removeClass("press");
      keyNameDisplay(event.key);
    } else if (key_pos == "Numpad9") {
      $(".keyPos" + key_pos).removeClass("press");
      keyNameDisplay(event.key);
    } else if (key_pos == "Numpad6") {
      $(".keyPos" + key_pos).removeClass("press");
      keyNameDisplay(event.key);
    } else if (key_pos == "Numpad1") {
      $(".keyPos" + key_pos).removeClass("press");
      keyNameDisplay(event.key);
    } else if (key_pos == "Numpad2") {
      $(".keyPos" + key_pos).removeClass("press");
      keyNameDisplay(event.key);
    } else if (key_pos == "Numpad3") {
      $(".keyPos" + key_pos).removeClass("press");
      keyNameDisplay(event.key);
    } else if (key_pos == "Numpad0") {
      $(".keyPos" + key_pos).removeClass("press");
      keyNameDisplay(event.key);
    } else if (key_pos == "NumpadDecimal") {
      $(".keyPos" + key_pos).removeClass("press");
      keyNameDisplay(event.key);
    } else if (key_pos == "ShiftRight") {
      $(".keyPos" + key_pos).removeClass("press");
      keyNameDisplay(event.key);
    } else if (key_pos == "AltRight") {
      $(".keyPos" + key_pos).removeClass("press");
      keyNameDisplay(event.key);
    } else if (key == 144) {
      setTimeout(function () {
        $(".key" + key).removeClass("press");
        keyNameDisplay(event.key);
      }, 100);
    } else if (key_pos == "MetaLeft") {
      $(".keyPos" + key_pos).addClass("press");
      setTimeout(() => {
        $(".keyPos" + key_pos).removeClass("press");
        keyNameDisplay(event.key);
      }, 100);
    } else {
      $(".key" + key).removeClass("press");
      keyNameDisplay(event.key);
    }
  });
  $(document).on("keydown", function (event) {
    event.preventDefault();
    var key = event.keyCode;
    var key_pos = event.code;
    // const head = document.querySelector(".heading");
    // head.innerHTML = key_pos;
    $(".keyPos" + key_pos).addClass("keys_lights");
    if (key_pos == "NumpadEnter") {
      $(".keyPos" + key_pos).addClass("press");
    } else if (key_pos == "ShiftRight") {
      $(".keyPos" + key_pos).addClass("press");
    } else if (key_pos == "Numpad4") {
      $(".keyPos" + key_pos).addClass("press");
    } else if (key_pos == "Numpad1") {
      $(".keyPos" + key_pos).addClass("press");
    } else if (key_pos == "Numpad8") {
      $(".keyPos" + key_pos).addClass("press");
    } else if (key_pos == "Numpad9") {
      $(".keyPos" + key_pos).addClass("press");
    } else if (key_pos == "Numpad6") {
      $(".keyPos" + key_pos).addClass("press");
    } else if (key_pos == "Numpad2") {
      $(".keyPos" + key_pos).addClass("press");
    } else if (key_pos == "Numpad3") {
      $(".keyPos" + key_pos).addClass("press");
    } else if (key_pos == "Numpad0") {
      $(".keyPos" + key_pos).addClass("press");
    } else if (key_pos == "NumpadDecimal") {
      $(".keyPos" + key_pos).addClass("press");
    } else if (key_pos == "ControlRight") {
      $(".keyPos" + key_pos).addClass("press");
    } else if (key_pos == "AltRight") {
      $(".keyPos" + key_pos).addClass("press");
    } else if (key_pos == "MetaLeft") {
      $(".keyPos" + key_pos).addClass("press");
      setTimeout(() => {
        $(".keyPos" + key_pos).removeClass("press");
        keyNameDisplay(event.key);
      }, 100);
    } else {
      $(".key" + key).addClass("press");
      $(".key" + key).addClass("keys_lights");
    }
    event.preventDefault();
  });
  document.addEventListener("keydown", (event) => {
    const keyCode = event.keyCode;
    if (keyCode >= 65 && keyCode <= 90) {
      if (!keyCounts[keyCode]) {
        keyCounts[keyCode] = 0;
      }
      keyCounts[keyCode]++;
      updateCountDisplay(keyCode);
    }
    pressed_key[keyCode] = "p";
  });
  const pressed_key = {};
  function keyNameDisplay(keyName) {
    if (keyName == " ") {
      keyName = "Space";
    }
    if (keyName == "Meta") {
      keyName = "Window";
    }
    var str =
      '&nbsp;&nbsp;&nbsp;&nbsp;<div class="keyOutput"><p>' +
      keyName +
      "</p></div>";
    $(".keyboard-header").prepend(str);
  }
  const keyCounts = {};
  function updateCountDisplay(keyCode) {
    const keyElement = document.querySelector(`.key${keyCode}`);
    if (keyElement) {
      let countElement = keyElement.querySelector(".count");
      if (!countElement) {
        countElement = document.createElement("div");
        countElement.classList.add("count");
        countElement.style.position = "absolute";
        countElement.style.bottom = "5px";
        countElement.style.right = "5px";
        countElement.style.color = "white";
        keyElement.appendChild(countElement);
      }
      countElement.textContent = keyCounts[keyCode];
    }
  }
  const style = document.createElement("style");
  style.textContent = `
      .key {
        position: relative;
      }
      .key .count {
        font-size: 12px;
        color: white;
        padding: 2px 5px;
      }
    `;
  document.head.appendChild(style);

  const resetButton = document.querySelector(".reset");

  resetButton.addEventListener("click", function () {
    for (key in keyCounts) {
      keyCounts[key] = "";
      updateCountDisplay(key);
    }
    for (key in pressed_key) {
      pressed_key[key] = "r";
      $(".key" + key).removeClass("keys_lights");
      $(".key" + key).removeClass("press");
      $(".keyPos" + key).removeClass("keys_lights");
      $(".keyPos" + key).removeClass("press");
    }
    $(".keyPos" + "NumpadEnter").removeClass("keys_lights");
    $(".keyPos" + "ShiftRight").removeClass("keys_lights");
    $(".keyPos" + "Numpad1").removeClass("keys_lights");
    $(".keyPos" + "Numpad2").removeClass("keys_lights");
    $(".keyPos" + "Numpad3").removeClass("keys_lights");
    $(".keyPos" + "Numpad4").removeClass("keys_lights");
    $(".keyPos" + "Numpad0").removeClass("keys_lights");
    $(".keyPos" + "Numpad5").removeClass("keys_lights");
    $(".keyPos" + "Numpad6").removeClass("keys_lights");
    $(".keyPos" + "Numpad7").removeClass("keys_lights");
    $(".keyPos" + "Numpad8").removeClass("keys_lights");
    $(".keyPos" + "Numpad9").removeClass("keys_lights");
    $(".keyPos" + "NumpadDecimal").removeClass("keys_lights");
    $(".keyPos" + "ControlRight").removeClass("keys_lights");
    $(".keyPos" + "AltRight").removeClass("keys_lights");
    const head = document.querySelector(".keyboard-header");
    head.innerHTML = "";
    initial = 0;
    const logoimg = document.querySelector("#logoimg");
    logoimg.style = `width: 40%;
  margin-left: 0.18rem;
  margin-top: 0.7rem;
  transform: rotateZ(${initial}deg);`;
  });

  const slider = document.querySelector("#slider2");

  function background() {
    initial += 9;
    initial = initial % 360;
    const logoimg = document.querySelector("#logoimg");
    logoimg.style = `width: 40%;
  margin-left: 0.18rem;
  margin-top: 0.7rem;
    transform: rotateZ(${initial}deg);`;
  }
  function background3() {
    initial -= 9;
    initial = initial % 360;
    const logoimg = document.querySelector("#logoimg");
    logoimg.style = `width: 40%;
  margin-left: 0.18rem;
  margin-top: 0.7rem;
    transform: rotateZ(${initial}deg);`;
  }
  function background2() {
    slider.classList.add("logobackground2");
    setTimeout(function () {
      slider.classList.remove("logobackground2");
    }, 100);
  }
});

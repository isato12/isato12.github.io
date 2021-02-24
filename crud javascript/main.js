let app = new (function () {
  this.el = document.getElementById("paises");
  this.paises = [
    "México",
    "Alemania",
    "Inglaterra",
    "España",
    "Belgica",
    "Argentina",
    "Brasil",
    "Chile",
  ];
  this.Count = function (data) {
    let el = document.getElementById("counter");
    let names = "País";
    if (data) {
      if (data > 1) {
        namep = "paises";
      }
      el.innerHTML = data + " " + namep;
    } else {
      el.innerHTML = "Sin " + namep;
    }
  };

  this.FetchAll = function () {
    let data = "";
    if (this.paises.length > 0) {
      for (i = 0; i < this.paises.length; i++) {
        data += "<tr>";
        data += "<td>" + this.paises[i] + "</td>";
        data += '<td><button onclick="app.Edit(' + i + ')">Edit</button></td>';
        data +=
          '<td><button onclick="app.Delete(' + i + ')">Delete</button></td>';
        data += "</tr>";
      }
    }
    this.Count(this.paises.length);
    return (this.el.innerHTML = data);
  };
  this.Add = function () {
    el = document.getElementById("add-name");
    // Get the value
    let pais = el.value;
    if (pais) {
      // Add the new value
      this.paises.push(pais.trim());
      // Reset input value
      el.value = "";
      // Dislay the new list
      this.FetchAll();
    }
  };
  this.Edit = function (item) {
    let el = document.getElementById("edit-name");
    // Display value in the field
    el.value = this.paises[item];
    // Display fields
    document.getElementById("spoiler").style.display = "block";
    self = this;
    document.getElementById("saveEdit").onsubmit = function () {
      // Get value
      let país = el.value;
      if (país) {
        // Edit value
        self.paises.splice(item, 1, pais.trim());
        // Display the new list
        self.FetchAll();
        // Hide fields
        CloseInput();
      }
    };
  };
  this.Delete = function (item) {
    // Delete the current row
    this.paises.splice(item, 1);
    // Display the new list
    this.FetchAll();
  };
})();
app.FetchAll();
function CloseInput() {
  document.getElementById("spoiler").style.display = "none";
}

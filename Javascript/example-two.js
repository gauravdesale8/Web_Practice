function demo() {

    var paragraph = document.getElementById("para");

    var attribute = document.createAttribute("class");

    attribute.value = "css";

    paragraph.setAttributeNode(attribute);
}
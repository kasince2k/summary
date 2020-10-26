import { jsPDF } from "jspdf";

const doc = new jsPDF({ 
  orientation: "landscape",
  unit: "in",
  format: [4,2]});

doc.text("Hello world!", 10, 10);
doc.save("some.pdf");

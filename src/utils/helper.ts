import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { parseCookies } from "nookies";

export function getBackgroundColor(acronymHypotheses: string) {
  let color: string = '#fff';
  switch (acronymHypotheses) {
    case "ALF":
      color = "#86e085"
      break;
    case "SAL":
      color = "#c8ffbb"
      break;
    case "SCV":
      color = "#fff5a1"
      break;
    case "SSV":
      color = "#ffc9a2"
      break;    
    case "PRÉ":
      color = "#ffa9b8"
      break;
    case 'NA':
      color = '#fff';
      break;
    default:
      break;
  }
  return color;
}

export async function exportToPdf(data: any, html: HTMLElement) {
  var HTML_Width = html.clientWidth;
  var HTML_Height = html.clientHeight;
  var top_left_margin = 10;
  var PDF_Width = HTML_Width + top_left_margin * 2;
  var canvas_image_width = PDF_Width;
  var canvas_image_height = HTML_Height;
  var pdf = new jsPDF("p", "px", [canvas_image_width * 2, canvas_image_height]);

  const img1 = await html2canvas(html, {
    useCORS: true,
    allowTaint: true,
    width: canvas_image_width,
    height: canvas_image_height,
  }).then(function (canvas) {
    canvas.getContext("2d");

    let img = new Image();
    img.src = canvas.toDataURL("image/png");
    return img
  });


  pdf.addImage(
    img1,
    "JPG",
    145,
    24,
    canvas_image_width,
    canvas_image_height
  );
  
  pdf.save(`${data.className} - ${data.schoolName} - Prof ${data.teacherName}`);
  
}

export function cleanMockValues() {
  localStorage.removeItem('class')
  localStorage.removeItem('classForm')
  localStorage.removeItem('poll')
  localStorage.removeItem('local')
}
export function cleanMockStatusValues() {
  localStorage.removeItem('poll')
  localStorage.removeItem('class')
  localStorage.removeItem('classForm')
  localStorage.removeItem('local')
  localStorage.removeItem('status')
  localStorage.setItem('statusClass', JSON.stringify({"status":0,"name":""}))
  localStorage.setItem('statusQuestions', JSON.stringify({"status":0,"name":""}))

}
export function getCookie(name: string) {
  const cookies = parseCookies();
  if (cookies[name]) {
    return cookies[name];
  }
  return null;
}

export const verificarURL = (originUrl: string, url: string) => {
  const urlsEspecificas = [`${originUrl}/login`];
  return urlsEspecificas.includes(url);
};

export const convertStringToJson = (data:string) =>{
  
  const lines = data.split('\n').filter(line => line.trim() !== '');

  const objectsArray = lines.map(line => {
      const [title, category, topic, grade, pages, link] = line.split('\t');
      return {
          title,
          category,
          topic,
          grade,
          pages,
          link
      };
  });
  return objectsArray;
}
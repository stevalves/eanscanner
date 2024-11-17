import { iGetJSON } from "@/app/api/product/[ean_product]/route";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";

export default function genPdf(dados: iGetJSON) {
  const doc = new jsPDF();

  // Cabeçalho
  doc.setFont("helvetica", "bold");
  doc.setFontSize(16);
  doc.text(dados.name, 10, 20);

  // Descrição
  doc.setFont("helvetica", "normal");
  doc.setFontSize(12);
  doc.text("Descrição:", 10, 40);
  doc.setFontSize(10);
  doc.text(dados.description, 10, 50, { maxWidth: 180 });

  // Categoria e Preço
  doc.setFontSize(12);
  doc.text(`Categoria: ${dados.category}`, 10, 80);
  doc.text(`Preço Médio: R$${dados.avg_price?.toFixed(2)}`, 10, 90);

  // Tabela de Atributos
  const atributos = dados.attributes?.map((attr: any) => [
    attr.at_name,
    attr.at_value,
  ]);
  autoTable(doc, {
    startY: 100,
    head: [["Atributo", "Valor"]],
    body: atributos,
  });

  // Salvar PDF
  doc.save("produto.pdf");
}

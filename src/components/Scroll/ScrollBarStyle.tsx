export default function ScrollbarStyles() {
  return (
    <style jsx global>{`
      ::-webkit-scrollbar {
        width: 5px;
      }

      ::-webkit-scrollbar-track {
        background: #f1f1f1;
      }

      ::-webkit-scrollbar-thumb {
        background: #E3E4E5;
        border-radius: 6px;
      }

      ::-webkit-scrollbar-thumb:hover {
        background: #A6A9AD;
      }
      scrollbar-width: thin;
      scrollbar-color: #E3E4E5 #f1f1f1;
      scrollbar-width: thin;
      scrollbar-color: #A6A9AD #f1f1f1;
    `}</style>
  );
}

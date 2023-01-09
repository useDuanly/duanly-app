export default function Footer() {
  return (
    <footer className="bg-dark text-light text-center">
      <div className="container p-4">
        <h1>&copy; Duanly Portfolio</h1>
        <p>2000 - {new Date().getFullYear()}</p>
        <p>All rights Reserved.</p>
      </div>
    </footer>
  );
}

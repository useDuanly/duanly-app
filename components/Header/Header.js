import Image from "next/legacy/image";
import foto from "/public/icon-512x512.png";
export default function Header() {
  return (
    <header className="row card-header-100 ">
      <div className="col-md-12">
        <div className="card card-body bg-secondary text-light">
          <div className="row">
            <div className="col-md-4  d-flex flex-column justify-content-center align-content-center">
              <Image
                className="img-fluid"
                src={foto}
                height={200}
                width={200}
                layout="intrinsic"
                alt="Duanly perfil"
                priority="true"
              />
            </div>
            <div className="col-md-8  p-3  ">
              <h1>{process.env.NEXT_PUBLIC_MESSAGE}</h1>
              <p className=" d-md-none">Developer Junior</p>
              <p className="p-3  ">
                Bienvenido a mi primer Portafolio. Soy estudiante de JavaScript.
                Estoy entusiasmado, ya que no conocía nada más que pinchar
                música. Ahora estoy aprendiendo tecnologías web.
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

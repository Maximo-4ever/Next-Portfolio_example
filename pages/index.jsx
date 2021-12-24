import Layout from "../components/Layout";
import { skills, experiences, projects } from "../Profile";

function index() {
  return (
    <Layout>
      {/* Header */}
      <header className="row">
        <div className="col-md-12">
          <div className="card card-body bg-secondary text-light">
            <div className="row">
              <div className="col-md-4">
                <img
                  src="ryan-ray-profile2.jpeg"
                  alt="Ryan ray"
                  className="img-fluid"
                />
              </div>
              <div className="col-md-8">
                <h1>Ryan Ray</h1>
                <h3>FullStack Developer</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati, quos, pariatur, animi eligendi dolore accusamus
                  quae et nostrum quidem debitis blanditiis Lorem ipsum dolor,
                  sit amet consectetur adipisicing elit. Doloribus modi fugiat
                  rerum necessitatibus ea dolores eum tenetur, quibusdam
                  nostrum? Quisquam iusto neque totam molestias eos sapiente
                  doloremque facilis dolores repellendus.
                </p>
                <a href="/hireme" className="btn btn-primary">
                  Hire me
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Experiencia */}
      <div className="row">
        <div className="col-md-4 pe-0">
          <div className="card bg-light pt-3" style={{ height: "100%" }}>
            <div className="card-body">
              <h2 className="mb-4">Skills</h2>
              {skills.map(({ skill, percentage }, i) => (
                <div className="mb-4" key={i}>
                  <h5>{skill}</h5>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-md-8 ps-0">
          <div className="card bg-light pt-3">
            <div className="card-body">
              <h2 className="mb-4">Experience</h2>
              <ul>
                {experiences.map(({ title, description, from, to }, i) => (
                  <li key={i}>
                    <h4>{title}</h4>
                    <h6>
                      {from} - {to}
                    </h6>
                    <p>{description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Portfolio */}
      <div className="row">
        <div className="col-md-12">
          <div className="card card-body bg-dark p-4">
            <div className="row">
              <div className="col-md-12">
                <h2 className="text-center text-light mb-4 fs-1">Portfolio</h2>
              </div>
              {projects.map(({ name, description, image }, i) => (
                <div className="col-md-4 p-3" key={i}>
                  <div className="card h-100">
                    <div className="overflow">
                      <img
                        src={`/${image}`}
                        alt={name}
                        className="card-img-top h-100"
                      />
                    </div>
                    <div className="card-body mt-1">
                      <h3>{name}</h3>
                      <p>{description}</p>
                      <a href="#!" className="btn btn-primary mt-1">
                        Know more
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <a
                href="https://maximo-4ever.github.io/"
                target="_blank"
                className="btn btn-outline-light mt-4"
              >
                More Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default index;

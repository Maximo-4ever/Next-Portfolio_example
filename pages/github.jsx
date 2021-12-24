import Layout from "../components/Layout";
import _error from "./_error";

function github({ user, statusCode }) {
  if (statusCode) {
    return <_error statusCode={statusCode} />
  }

  return (
    <Layout darkmode={true} footer={false}>
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <div className="card card-body text-center">
            <h1 className="fs-1">{user.name}</h1>
            <img
              className="rounded-circle mx-auto d-block my-3"
              src={user.avatar_url}
              alt={user.name}
              style={{ height: "240px", width: "240px" }}
            />
            <p className="fs-4">{user.bio}</p>
            <a
              href={user.blog}
              target="_blank"
              className="btn btn-outline-secondary my-2"
            >
              Portfolio
            </a>
            <a
              href={user.html_url}
              target="_blank"
              className="btn btn-outline-secondary my-2"
            >
              Go to GitHub
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch("https://api.github.com/users/Maximo-4ever");
  const data = await res.json();
  console.log(res.status);
  const statusCode = res.status > 200 ? res.status : false;

  return {
    props: {
      user: data,
      statusCode
    },
  };
};

export default github;

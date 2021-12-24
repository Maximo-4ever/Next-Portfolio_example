import Layout from "../components/Layout";

function _error({ statusCode }) {
  return (
    <Layout>
      {statusCode ? (
        <h1 className="text-center">Could not load your page: {statusCode}</h1>
      ) : (
        <h1 className="text-center">Could not load this page</h1>
      )}
    </Layout>
  );
}

export default _error;

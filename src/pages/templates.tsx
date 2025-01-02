import Layout from '@theme/Layout';
import Templates from '@site/src/components/Templates';

export default function Home(): JSX.Element {
  return (
    <Layout
      title={`Templates for simple Kubernetes deployments`}
      description="Use one of the predefined templates to start your application on Kubernetes faster">
      <main>
        <Templates />
      </main>
    </Layout>
  );
}

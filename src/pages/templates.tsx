import Layout from '@theme/Layout';
import Templates from '@site/src/components/Templates';

export default function Home(): JSX.Element {
  return (
    <Layout
      title={`Kubero Templates`}
      description="Kubero is a platform as a service (PaaS) that enables developers to build, run, and operate applications on Kubernetes.">
      <main>
        <Templates />
      </main>
    </Layout>
  );
}

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# Upgrade

## Upgrade to the latest version

To upgrade Kubero just rerun the install operator command. It will upgrade all components to the latest version.

<Tabs groupId="install-strategy">
  <TabItem value="kubectl" label="kubectl">

      kubectl apply -f https://raw.githubusercontent.com/kubero-dev/kubero-operator/main/deploy/operator.yaml
  </TabItem>
  <TabItem value="cli" label="Kubero CLI">

      kubero install -c kubero-operator
  </TabItem>
</Tabs>
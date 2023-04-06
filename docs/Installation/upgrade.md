---
title: Upgrade/Uninstall
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# Upgrade or Uninstall

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

## Uninstall Kubero

:::warning

Deleting the Kubero Operator will delete all Kubero CRDs and all Kubero resources. This will also delete all Kubero apps and pipelines.

:::

<Tabs groupId="install-strategy">
  <TabItem value="kubectl" label="kubectl">

      kubectl delete -f https://raw.githubusercontent.com/kubero-dev/kubero-operator/main/deploy/operator.yaml
  </TabItem>
</Tabs>
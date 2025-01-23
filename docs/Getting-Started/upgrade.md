---
title: Upgrade/Uninstall
description: Learn how to upgrade the Kubero operator to the latest version or uninstall it.
sidebar_position: 5
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# Upgrade or Uninstall

## Upgrade to the Latest Version

To upgrade the Kubero operator to the latest version, simply rerun the installation command for the operator. This will automatically update all components to their latest versions.

<Tabs groupId="install-strategy">
  <TabItem value="kubectl" label="kubectl">
      ```bash
      kubectl apply -f https://raw.githubusercontent.com/kubero-dev/kubero-operator/main/deploy/operator.yaml
      ```
  </TabItem>
  <TabItem value="cli" label="Kubero CLI">
      ```bash
      kubero install -c kubero-operator
      ```
  </TabItem>
</Tabs>

## Upgrade Kubero UI

To upgrade the Kubero UI replace the image tag in the Kubero UI CRD.

```batch
kubectl patch kuberoes.application.kubero.dev kubero -p '{"spec":{"image":{"tag":"v1.11"}}}' --type=merge -n kubero
```

## Uninstall Kubero

:::warning

Deleting the Kubero Operator will delete all Kubero CRDs and all Kubero resources. This will also delete all Kubero apps and pipelines.

:::

<Tabs groupId="install-strategy">
  <TabItem value="kubectl" label="kubectl">
      ```bash
      kubectl delete -f https://raw.githubusercontent.com/kubero-dev/kubero-operator/main/deploy/operator.yaml
      ```
  </TabItem>
</Tabs>
# Extra volumes

Volumes allow you to add additional storage to your app. You can use them to store data or to share data between containers.
A Volume can be mounten in a specific path in your container. The path is relative to the root of your container. 

:::info

Try to avoid using volumes for storing data. It is better to use an object storage like S3 for that. Volumes are not backed up and can be lost when you delete your app.

:::

## Add a volume

To add a volume to your app, click on the "Add volume" button on the volumes tab of your app edit page.

Volumes are mounted read-write-many or read-write-once. This means that multiple containers can mount the same volume and write to it. This is useful for sharing data between containers. If a volume is mounted read-once, it can only be mounted in one container. This may cause reboots and deployments to fail if the volume is already mounted (new container remains in status "pending")

The available storage classes are listed in the dropdown menu and depend on the storage classes available in your cluster/provider.

<img src="/assets/screenshots/create_volumes.png" alt="Screenshot of adding a volume to an app"/>

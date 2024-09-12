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


## Kind

In Kind all volumes are mounted as read-write-once but can be mounted in multiple containers. 

## Linode, OVH and other Providers

Linode, OVH and many others does not support read-write-many volumes by default. You'll need to create read-write-once. This might be a problem if you want to scale your app horizontally by adding more pods. 
https://www.linode.com/community/questions/22004/kubernetes-pvcs-with-readwritemany 

This Blog entry describes how to use a NFS server to provide read-write-many volumes in Linode.
https://startup2scalable.com/2024/02/read-write-many-volumes-on-lke-with-nfs/

There are also some projects that provide a solution to mount read-write-many volumes: 

 - (rook.io)[https://rook.io/docs/rook/latest-release/Storage-Configuration/Shared-Filesystem-CephFS/filesystem-storage/#consume-the-shared-filesystem-k8s-registry-sample]
 - (longhorn.io)[https://onairotich.medium.com/exploring-longhorn-a-game-changer-for-kubernetes-storage-5a9068387818] 
 - (OpenEBS.io)[https://openebs.io/docs/2.12.x/concepts/rwm]
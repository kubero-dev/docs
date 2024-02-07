# Add-ons

Add-ons are additional services that can be added to your application to store data or add another functionality. Add-ons are installed with the Kubero operator or as an operator from a third party.

### Kubero Operator

Some basic add-ons are installed with the Kubero operator. So no special installation is needed. More add-ons can be added by installing a third party operator.

The following Addons are available:

|   | Addon | Maintainer | Built in* |
|---|-------|------------|-----------|
| <img src="https://raw.githubusercontent.com/kubero-dev/kubero/main/client/public/img/addons/MySQL.png" width="30px" /> | MySQL | [Bitnami](https://charts.bitnami.com/bitnami) | ✅ |
| <img src="https://raw.githubusercontent.com/kubero-dev/kubero/main/client/public/img/addons/postgresql.png" width="30px" /> | PostgreSQL | [Bitnami](https://charts.bitnami.com/bitnami) | ✅ |
| <img src="https://raw.githubusercontent.com/kubero-dev/kubero/main/client/public/img/addons/Redis.png" width="30px" /> | Redis | [Bitnami](https://charts.bitnami.com/bitnami) | ✅ |
| <img src="https://raw.githubusercontent.com/kubero-dev/kubero/main/client/public/img/addons/MongoDB.png" width="30px" /> | MongoDB | [Bitnami](https://charts.bitnami.com/bitnami) | ✅ |
| <img src="https://raw.githubusercontent.com/kubero-dev/kubero/main/client/public/img/addons/Elasticsearch.png" width="30px" /> | Elasticsearch | [Bitnami](https://charts.bitnami.com/bitnami)  | ✅ |
| <img src="https://raw.githubusercontent.com/kubero-dev/kubero/main/client/public/img/addons/Kafka.png" width="30px" /> | Kafka | [Bitnami](https://charts.bitnami.com/bitnami)  | ✅ |
| <img src="https://raw.githubusercontent.com/kubero-dev/kubero/main/client/public/img/addons/CouchDB.png" width="30px" /> | CouchDB | [Apache](https://apache.github.io/couchdb-helm) | ✅ |
| <img src="https://raw.githubusercontent.com/kubero-dev/kubero/main/client/public/img/addons/Haraka.png" width="30px" /> | Haraka Mail Server | [Kubero](https://github.com/kubero-dev/haraka-docker) | ✅ |
| <img src="https://raw.githubusercontent.com/kubero-dev/kubero/main/client/public/img/addons/Memcached.png" width="30px" /> | Memcache | [Bitnami](https://charts.bitnami.com/bitnami)  | ✅ |
| <img src="https://raw.githubusercontent.com/kubero-dev/kubero/main/client/public/img/addons/RabbitMQ.png" width="30px" /> | RabbitMQ | [Bitnami](https://charts.bitnami.com/bitnami)  | ✅ |
| <img src="https://raw.githubusercontent.com/kubero-dev/kubero/main/client/public/img/addons/cloudflare.svg" width="30px" /> | Cludflare Tunnels | [Adianth](https://github.com/adyanth/cloudflare-operator) |  |
| <img src="https://raw.githubusercontent.com/kubero-dev/kubero/main/client/public/img/addons/Minio.png" width="30px" /> | Minio | [Minio](https://artifacthub.io/packages/olm/community-operators/minio-operator) |  |
| <img src="https://raw.githubusercontent.com/kubero-dev/kubero/main/client/public/img/addons/MongoDB.png" width="30px" /> | Percona MongoDB Cluster | [Percona](https://artifacthub.io/packages/olm/community-operators/mongodb-operator) |  |
| <img src="https://raw.githubusercontent.com/kubero-dev/kubero/main/client/public/img/addons/postgresql.png" width="30px" /> | Crunchy Postgres Cluster | [Crunchy Data](https://artifacthub.io/packages/olm/community-operators/postgresql) |  |
| <img src="https://raw.githubusercontent.com/kubero-dev/kubero/main/client/public/img/addons/Redis.png" width="30px" /> | Redis Cluster | [Opstree](https://artifacthub.io/packages/olm/community-operators/redis-operator) |  |
| <img src="https://raw.githubusercontent.com/kubero-dev/kubero/main/client/public/img/addons/CockroachDB.svg" width="30px" /> | CockroachDB| [CockroachDB](https://artifacthub.io/packages/olm/community-operators/cockroachdb) |  |

*Built in means that the addon is installed with the Kubero operator.

<hr />

<img src="/assets/screenshots/addons.png" alt="Screenshot of available Kubero add-ons"/>


## Use an Add-on in your app

To use an add-on in your app, you need to add it in the add-ons section of your app edit page while creating a new app or editing an existing one. A form will appear where you can configure the add-on.

:::warning

Deleting or renaming an add-on instance will delete the add-on from your app and all data will be lost. **For ever.**

:::

<img src="/assets/screenshots/addon_create.png" alt="Screenshot of adding a addon to an app"/>
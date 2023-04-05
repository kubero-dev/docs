# Add-ons

Add-ons are additional services that can be added to your application to store data or add another functionality. Add-ons are installed with the Kubero operator or as an operator from a third party.

### Kubero Operator

Some basic add-ons are installed with the Kubero operator. So no special installation is needed. More add-ons can be added by installing a third party operator.

- MySQL
- PostgreSQL
- Redis
- MongoDB
- Kafka
- CouchDB
- Elasticsearch

<img src="/assets/screenshots/addons.png" alt="Screenshot of available Kubero add-ons"/>


### Third party Operators

Add-ons can also be installed with a third party operator. They work the same way as any other KuberoApp CRD's.

## Use an Add-on in your app

To use an add-on in your app, you need to add it in the add-ons section of your app edit page while creating a new app or editing an existing one. A form will appear where you can configure the add-on.

:::warning

Deleting or renaming an add-on instance will delete the add-on from your app and all data will be lost. **For ever.**

:::

<img src="/assets/screenshots/addon_create.png" alt="Screenshot of adding a addon to an app"/>
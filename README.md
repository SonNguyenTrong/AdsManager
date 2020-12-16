## ADSMANAGER

## DB Migration Notes
- Create migration/ model
    - `$sequelize model:generate --name name-migration --attributes a:a,b:b `

## Configure
- clone our project github

- Install packages:  	
    - `$ npm install`

- Hosting https link to localhost while not configured:  	
    - `$ ngrok http 80`

- Copy https link from above step and add to shopify app to link app with shop
- Add your store according to the shopify(apiket, secret key) to your account

- Create or config config/config.json file

## How to run:
- Change database.json to local setting(unsynchronize) and run migrate
    - `$ sequelize db:migrate`
- Seed the example data for testing (optional)
    - `$ sequelize db:seed:all`

- Run application
    - `$ npm start`

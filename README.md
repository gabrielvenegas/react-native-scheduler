<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://www.vix.com.br/img/logo-vix.png" width="100" alt="Nest Logo" /></a>
</p>


# @vixtech/react-native-scheduler

A Scheduler to run a specific function at a specific time for app that are kept open full time

## Installation

```sh
pnpm add @vixtech/react-native-scheduler
```

```sh
yarn add @vixtech/react-native-scheduler
```

```sh
npm install @vixtech/react-native-scheduler
```

## Usage

```js
import { Scheduler } from 'react-native-scheduler';

// ...
const onExecute = () => {
  // Do something at 12:00:00 every day
  console.log('Execute');
}

<Scheduler onExecute={onExecute} hour={12} minute={0} second={0} />
```

## License

MIT
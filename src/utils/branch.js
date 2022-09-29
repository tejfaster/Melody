import branch from 'react-native-branch'

let buo = await branch.createBranchUniversalObject('content/12345', {
    title: 'My Content Title',
    contentDescription: 'My Content Description',
    contentMetadata: {
      customMetadata: {
        key1: 'value1'
      }
    }
  })
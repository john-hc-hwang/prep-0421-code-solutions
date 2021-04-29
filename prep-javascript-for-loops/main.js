for (var i = 0; i < 10; i++) {
  console.log(i);
}

for (i = 0; i < 10; i++) {
  console.log(2 * i);
}

// no-redeclare github error msg

for (i = 100; i > 0; i--) {
  console.log('Time till explosion', i, '!');
}

// no-redeclare github error msg

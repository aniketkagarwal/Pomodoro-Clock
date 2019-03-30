$workT = $('#work-time');
$breakT = $('#break-time');
$status = $('#status');

$('#minus').click(function() {
  $status.text('Break!');
  if (+$breakT.text() > 1) {
    $breakT.text(+$breakT.text() - 1);
  }
});

$('#plus').click(function() {
  $status.text('Break!');
  $breakT.text(+$breakT.text() + 1);
});

// Controls for Session Length
$('#minus2').click(function() {
  $status.text('Work!');
  if (+$workT.text() > 1) {
    $workT.text(+$workT.text() - 1);
  }
});

$('#plus2').click(function() {
  $status.text('Work!');
  $workT.text(+$workT.text() + 1);
});

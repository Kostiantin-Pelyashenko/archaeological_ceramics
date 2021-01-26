let dv,
  dsh,
  dt,
  dn,
  hp,
  hsh,
  hpl,
  hdn,
  thw,
  thb,
  fa,
  fb,
  fv,
  fg,
  fd,
  fe,
  fj,
  fi,
  v1,
  v2,
  v3,
  v4;

//Вычисление указателей форм горшков
function myFunction() {
  dv = document.getElementById('dv').value; //Диаметр венчика
  dsh = document.getElementById('dsh').value; //Диаметр основания шейки
  dt = document.getElementById('dt').value; //Диаметр наибольшего расширения корпуса
  dn = document.getElementById('dn').value; //Диаметр дна
  hp = document.getElementById('hp').value; //Общая высота
  hsh = document.getElementById('hsh').value; //Высота шейки
  hpl = document.getElementById('hpl').value; //Высота плечика
  hdn = document.getElementById('hdn').value; //Высота придонной части

  if (isNaN(hsh) || isNaN(dsh) || hsh == '' || dsh == '') {
    fa = 'incorrect  input';
    document.getElementById('fa').style.color = 'red';
  } else {
    fa = hsh / dsh;
    fa = fa.toFixed(2);
    document.getElementById('fa').style.color = '#3333cc';
    document.getElementById('fa').style.fontSize = '25px';
  }
  document.getElementById('fa').innerHTML = fa; //ФА Пропорция шейки
  document.getElementById('fa').style.fontFamily = 'Arial';

  if (
    isNaN(hsh) ||
    isNaN(dsh) ||
    isNaN(dv) ||
    hsh == '' ||
    dsh == '' ||
    dv == ''
  ) {
    fb = 'incorrect input';
    document.getElementById('fb').style.color = 'red';
  } else {
    fb = (dv - dsh) / (2 * hsh);
    fb = fb.toFixed(2);
    document.getElementById('fb').style.color = '#3333cc';
    document.getElementById('fb').style.fontSize = '25px';
  }
  document.getElementById('fb').innerHTML = fb; //ФБ Угол наклона шейки
  document.getElementById('fb').style.fontFamily = 'Arial';

  if (isNaN(hpl) || isNaN(dt) || hpl == '' || dt == '') {
    fv = 'incorrect  input';
    document.getElementById('fv').style.color = 'red';
  } else {
    fv = hpl / dt;
    fv = fv.toFixed(2);
    document.getElementById('fv').style.color = '#3333cc';
    document.getElementById('fv').style.fontSize = '25px';
  }
  document.getElementById('fv').innerHTML = fv; //ФВ Пропорция плечика
  document.getElementById('fv').style.fontFamily = 'Arial';

  if (
    isNaN(hpl) ||
    isNaN(dt) ||
    isNaN(dsh) ||
    hpl == '' ||
    dt == '' ||
    dsh == ''
  ) {
    fg = 'incorrect  input';
    document.getElementById('fg').style.color = 'red';
  } else {
    fg = (dt - dsh) / (2 * hpl);
    fg = fg.toFixed(2);
    document.getElementById('fg').style.color = '#3333cc';
    document.getElementById('fg').style.fontSize = '25px';
  }
  document.getElementById('fg').innerHTML = fg; //ФГ Угол крутизны плечика
  document.getElementById('fg').style.fontFamily = 'Arial';

  if (isNaN(hp) || isNaN(dt) || hp == '' || dt == '') {
    fd = 'incorrect  input';
    document.getElementById('fd').style.color = 'red';
  } else {
    fd = hp / dt;
    fd = fd.toFixed(2);
    document.getElementById('fd').style.color = '#3333cc';
    document.getElementById('fd').style.fontSize = '25px';
  }
  document.getElementById('fd').innerHTML = fd; //ФД Общая пропорция сосуда
  document.getElementById('fd').style.fontFamily = 'Arial';

  if (
    isNaN(hsh) ||
    isNaN(hpl) ||
    isNaN(hdn) ||
    hsh == '' ||
    hpl == '' ||
    hdn == ''
  ) {
    fe = 'incorrect  input';
    document.getElementById('fe').style.color = 'red';
  } else {
    fe = (hsh * 10 + hpl * 10) / 10 / hdn;
    fe = fe.toFixed(2);
    document.getElementById('fe').style.color = '#3333cc';
    document.getElementById('fe').style.fontSize = '25px';
  }
  document.getElementById('fe').innerHTML = fe; //ФE Высота плечика
  document.getElementById('fe').style.fontFamily = 'Arial';

  if (
    isNaN(hsh) ||
    isNaN(hpl) ||
    isNaN(dsh) ||
    isNaN(dv) ||
    isNaN(dt) ||
    hsh == '' ||
    hpl == '' ||
    dsh == '' ||
    dv == '' ||
    dt == ''
  ) {
    fj = 'incorrect  input';
    document.getElementById('fj').style.color = 'red';
  } else {
    fj = (2 * dt - dv - dsh) / (4 * ((hsh * 10 + hpl * 10) / 10));
    fj = fj.toFixed(2);
    document.getElementById('fj').style.color = '#3333cc';
    document.getElementById('fj').style.fontSize = '25px';
  }
  document.getElementById('fj').innerHTML = fj; //ФЖ Общая конфигурация верхней части
  document.getElementById('fj').style.fontFamily = 'Arial';

  if (
    isNaN(dt) ||
    isNaN(dn) ||
    isNaN(hdn) ||
    dt == '' ||
    dn == '' ||
    hdn == ''
  ) {
    fi = 'incorrect  input';
    document.getElementById('fi').style.color = 'red';
  } else {
    fi = (dt - dn) / (2 * hdn);
    fi = fi.toFixed(2);
    document.getElementById('fi').style.color = '#3333cc';
    document.getElementById('fi').style.fontSize = '25px';
  }
  document.getElementById('fi').innerHTML = fi; //Общая конфигурация придонной части
  document.getElementById('fi').style.fontFamily = 'Arial';
}
//Вычисление объема сосуда
function myFunction2() {
  dv = document.getElementById('dv').value; //Диаметр венчика
  dsh = document.getElementById('dsh').value; //Диаметр основания шейки
  dt = document.getElementById('dt').value; //Диаметр наибольшего расширения корпуса
  dn = document.getElementById('dn').value; //Диаметр дна
  hp = document.getElementById('hp').value; //Общая высота
  hsh = document.getElementById('hsh').value; //Высота шейки
  hpl = document.getElementById('hpl').value; //Высота плечика
  hdn = document.getElementById('hdn').value; //Высота придонной части
  thw = document.getElementById('thw').value; //Толщина стенки сосуда
  thb = document.getElementById('thb').value; //Толщина дна
  if (
    isNaN(dv) ||
    isNaN(dsh) ||
    isNaN(dt) ||
    isNaN(dn) ||
    isNaN(hp) ||
    isNaN(hsh) ||
    isNaN(hpl) ||
    isNaN(hdn) ||
    isNaN(thw) ||
    isNaN(thb) ||
    dv == '' ||
    dsh == '' ||
    dt == '' ||
    dn == '' ||
    hp == '' ||
    hsh == '' ||
    hpl == '' ||
    hdn == '' ||
    thw == '' ||
    thb == ''
  ) {
    v1 = 'incorrect  input';
    document.getElementById('v1').style.color = 'red';
    document.getElementById('v1').style.fontSize = '25px';
  } else {
    v1 =
      1.05 *
      (hsh *
        (Math.pow(dv - thw * 2, 2) / 4 +
          ((dv - thw * 2) * (dsh - thw * 2)) / 4 +
          Math.pow(dsh - thw * 2, 2) / 4) +
        hpl *
          (Math.pow(dsh - thw * 2, 2) / 4 +
            ((dsh - thw * 2) * (dt - thw * 2)) / 4 +
            Math.pow(dt - thw * 2, 2) / 4) +
        (hdn - thb) *
          (Math.pow(dt - thw * 2, 2) / 4 +
            ((dt - thw * 2) * (dn - thw * 2)) / 4 +
            Math.pow(dn - thw * 2, 2) / 4)); //формула вычисления объема целого сосуда
    document.getElementById('v1').style.color = 'green';
    document.getElementById('v1').style.fontSize = '25px';
  }
  document.getElementById('v1').innerHTML = v1; //Вывод на экран объема целого сосуда
  document.getElementById('v1').style.fontFamily = 'Arial';

  if (
    isNaN(dv) ||
    isNaN(dsh) ||
    isNaN(dt) ||
    isNaN(hsh) ||
    isNaN(hpl) ||
    isNaN(thw) ||
    isNaN(thb) ||
    dv == '' ||
    dsh == '' ||
    dt == '' ||
    hsh == '' ||
    hpl == '' ||
    thw == '' ||
    thb == ''
  ) {
    v2 = 'incorrect  input';
    document.getElementById('v2').style.color = 'red';
    document.getElementById('v2').style.fontSize = '25px';
  } else {
    v2 =
      1.05 *
      (hsh *
        (Math.pow(dv - thw * 2, 2) / 4 +
          ((dv - thw * 2) * (dsh - thw * 2)) / 4 +
          Math.pow(dsh - thw * 2, 2) / 4) +
        hpl *
          (Math.pow(dsh - thw * 2, 2) / 4 +
            ((dsh - thw * 2) * (dt - thw * 2)) / 4 +
            Math.pow(dt - thw * 2, 2) / 4)); //формула вычисления объема верхней части
    document.getElementById('v2').style.color = 'green';
    document.getElementById('v2').style.fontSize = '25px';
  }
  document.getElementById('v2').innerHTML = v2; //Вывод на экран объема целого сосуда
  document.getElementById('v2').style.fontFamily = 'Arial';
}
//Вычисление объема сосуда (формула В.Ф. Генинга)
function myFunction3() {
  dv = document.getElementById('dv').value; //Диаметр венчика
  dsh = document.getElementById('dsh').value; //Диаметр основания шейки
  dt = document.getElementById('dt').value; //Диаметр наибольшего расширения корпуса
  dn = document.getElementById('dn').value; //Диаметр дна
  hp = document.getElementById('hp').value; //Общая высота
  hsh = document.getElementById('hsh').value; //Высота шейки
  hpl = document.getElementById('hpl').value; //Высота плечика
  hdn = document.getElementById('hdn').value; //Высота придонной части
  thw = document.getElementById('thw').value; //Толщина стенки сосуда
  thb = document.getElementById('thb').value; //Толщина дна

  if (
    isNaN(dv) ||
    isNaN(dsh) ||
    isNaN(dt) ||
    isNaN(dn) ||
    isNaN(hp) ||
    isNaN(hsh) ||
    isNaN(hpl) ||
    isNaN(hdn) ||
    isNaN(thw) ||
    isNaN(thb) ||
    dv == '' ||
    dsh == '' ||
    dt == '' ||
    dn == '' ||
    hp == '' ||
    hsh == '' ||
    hpl == '' ||
    hdn == '' ||
    thw == '' ||
    thb == ''
  ) {
    v3 = 'incorrect  input';
    document.getElementById('v3').style.color = 'red';
    document.getElementById('v3').style.fontSize = '25px';
  } else {
    v3 =
      1.57 *
      (hsh *
        (Math.pow(dv - thw * 2, 2) / 4 +
          ((dv - thw * 2) * (dsh - thw * 2)) / 4 +
          Math.pow(dsh - thw * 2, 2) / 4) +
        hpl *
          (Math.pow(dsh - thw * 2, 2) / 4 +
            ((dsh - thw * 2) * (dt - thw * 2)) / 4 +
            Math.pow(dt - thw * 2, 2) / 4) +
        (hdn - thb) *
          (Math.pow(dt - thw * 2, 2) / 4 +
            ((dt - thw * 2) * (dn - thw * 2)) / 4 +
            Math.pow(dn - thw * 2, 2) / 4)); //формула вычисления объема целого сосуда
    document.getElementById('v3').style.color = 'green';
    document.getElementById('v3').style.fontSize = '25px';
  }
  document.getElementById('v3').innerHTML = v3; //Вывод на экран объема целого сосуда
  document.getElementById('v3').style.fontFamily = 'Arial';

  if (
    isNaN(dv) ||
    isNaN(dsh) ||
    isNaN(dt) ||
    isNaN(hsh) ||
    isNaN(hpl) ||
    isNaN(thw) ||
    isNaN(thb) ||
    dv == '' ||
    dsh == '' ||
    dt == '' ||
    hsh == '' ||
    hpl == '' ||
    thw == '' ||
    thb == ''
  ) {
    v4 = 'incorrect  input';
    document.getElementById('v4').style.color = 'red';
    document.getElementById('v4').style.fontSize = '25px';
  } else {
    v4 =
      1.57 *
      (hsh *
        (Math.pow(dv - thw * 2, 2) / 4 +
          ((dv - thw * 2) * (dsh - thw * 2)) / 4 +
          Math.pow(dsh - thw * 2, 2) / 4) +
        hpl *
          (Math.pow(dsh - thw * 2, 2) / 4 +
            ((dsh - thw * 2) * (dt - thw * 2)) / 4 +
            Math.pow(dt - thw * 2, 2) / 4)); //формула вычисления объема верхней части
    document.getElementById('v4').style.color = 'green';
    document.getElementById('v4').style.fontSize = '25px';
  }
  document.getElementById('v4').innerHTML = v4; //Вывод на экран объема целого сосуда
  document.getElementById('v4').style.fontFamily = 'Arial';
}

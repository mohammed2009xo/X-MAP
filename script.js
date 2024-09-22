// إنشاء خريطة وتحديد مركزها (إحداثيات ومقياس زووم)
var map = L.map('map').setView([30.05289, 31.189156], 13); // لندن كمثال

// إضافة طبقة من OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// إضافة علامة (Marker) على الخريطة
var marker = L.marker([30.05289, 31.189156]).addTo(map);

// إضافة دائرة
var circle = L.circle([26.74561, 29.970703], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500000
}).addTo(map);

// إضافة مستطيل
var polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
]).addTo(map);

// إضافة popup عند النقر على العلامة
marker.bindPopup("<b>Welcome to London!</b><br>I am a popup.").openPopup();

// إضافة popup عام في الخريطة
var popup = L.popup()
    .setLatLng([30.05289, 31.189156])
    .setContent("I am a standalone popup.")
    .openOn(map);

// عرض إحداثيات النقطة التي ينقر عليها المستخدم
function onMapClick(e) {
    alert("You clicked the map at " + e.latlng);
}
map.on('click', onMapClick);

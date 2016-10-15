

var ConnectRoles = require('connect-roles')


module.exports = function(roles){
  //moderator users can access private page, but 
  //they might not be the only ones so we don't return 
  //false if the user isn't a moderator 
  roles.use('access private page', function (req) {
    if (req.user.role === 'moderator') {
      return true
    }
  })
   
  //admin users can access all pages 
  roles.use(function (req) {
    if (req.user.role === 'admin') {
      return true
    }
  })

  roles.use('access booking', function (req){
  	if (req.user.role === 'bookingsjef') {
  		return true
  	}else{
      return false
    }
  })

  roles.use('delete band', function (req){
    if (req.user.role === 'bookingsjef') {
      return true
    } else if (req.user.role === 'bookingansvarlig') {
      return true
    }
  })

  roles.use('delete booking', function (req){
    if (req.user.role === 'bookingsjef') {
      return true
    } else if (req.user.role === 'bookingansvarlig') {
      return true
    }
  })

  roles.use('delete stage', function (req){
    if (req.user.role === 'admin') {
      return true
    }
  })

  roles.use('delete concert', function (req){
    if (req.user.role === 'bookingsjef') {
      return true
    }
  })
   roles.use('edit concert', function (req){
    if (req.user.role === 'bookingsjef') {
      return true
    }
  })

  roles.use('bands user',function (req) {
    if (req.user.role === 'band' && req.user.connected_id === req.params.band_id) {
      return true
    }
  })
  roles.use('bands manager',function (req) {
    if (req.user.role === 'manager' && req.user.connected_id === req.params.band_id) {
      return true
    }
  })
}
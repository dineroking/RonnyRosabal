/**
 * Project: RonnyRosabal.
 * By: Ronny Rosabal
 * Date: 12/27/15
 * Time: 7:04 PM
 * Content: Reverse a string
 */

//take input from the user of a string of up to 1000 characters
//
var test = "EajoQSopfzWsydDcTEundefinedXyavRQAwspkMsqAdmQEAbsjZFJsjBJYZikwxPkoPctNcoQesBIeZiWBundefinedqVleTKDobUVlSYChYMUAundefinedXsEhmYgPMuBsYQAJQSWTLYkkKvundefinedHrCBkqundefinedbbtJOTjDHLXjRxlZxxUsoZZtRJrBDltDuDvTOzligPqPlcDPyDxundefinedVqFqUkrFyafTiGWIWHVxXAloIEXjqWGSMXAPMEtgSfBdSvHNCEvQvcgtyBuCjtwXBTvCoNYgaahGOPzQOoxrjZaJmsLkgxzALTagpkzqOXHGYPWGgFsoVTWIqWrGIhuayliBjWjAnldpVykCQpTVLnbiMORqzvpBBBVuraKJKUwhekZlfytgqHFVSFundefineduKrpdjEDzLhKykOnQpmqKXeCALyFJBrundefinedirXhpwUVtixongOqwundefinedzUTpfhbqKrAgBMkXCnyhpzeoVPZdPFsPLzZbobsEsqqfmdwIVYyIcundefineddIySXgzfavAcvzoHuHHIpredSMFuHtdxGktYZMElzCSOscysbZFwVbagTfhBEtxjtSgltTEBundefinedIzAzreQuBTazQtICubGvfHYCujZOSbivFdnsXiryJTPnlnHLTgdcFRHjxAZkWIekXqQxTEVvtynzLaKundefinedUhhUyDofcHGundefinedCRYrzqiBUEYcwVqLCQVLptzhDNgggJYMmundefinedvOXWLsDCtKPFBhpjuZpwZfIXuSxnWtsSwFWIQPzundefinedBKEkundefineduRTMYdOQauTtllNfpQDyOSGKDfhYxgZWiroRundefinedlOaBqemJNBBALpOnEZpBeNIRVrygoOjfbaglIGDotbeHquSsmsSBrRgGwFArcDTwHIrundefinediKpJRuadTVXeEAuiXEnqfzqSRXJDEzzqivTGMAATWyqVGadXSttzTsJltZsGEJcKuXISljHBWSuundefinedhbftqNiqntkfXkejnuIiFknEVdRmMOTa";
var expected = "aETaOjMomQRSdoVpEfnzkWFsiyIduDncjTeEkuXnfdketfniqnieNdqXtyfabvhRdQeAnwisfpekdMnsuquASdWmBQHEjAlbSsIjXZuFKJcsJjEBGJsYZZtilkJwsxTPzktotPScXtdNacGoVQqeysWBTIAeAZMiGWTBvuinqdzezfEiDnJeXdRqSVqlzefTqKnDEoXbiUuVAlESeYXCVhTYdMaUuARuJnpdKeifdienneidfXesdEnhumrYIgHPwMTuDBcsrYAQFAwJGQgSRWrTBLSYskmksKSvuuqnHdeebftionDeGdIHlrgCaBbkfqjuOnodgeyfriVnReIdNbebBtpJZOETnjODpHLLAXBjBRNxJlmZexqxBUasOolZdZetnRiJfreBdDnlutRDourDivWTZOgzxlYihgfPDqKPGlScODyPDyQDpxfuNnldletfTiunaeQdOVdqYFMqTURkurdFeynaiffTeidGnWuIkWEHKVBxdXeAnliofIeEdXnjuqzWPGQSIMWXFAwPSMsEttWgnSxfSBudXSIvfHZNwCpEZvuQjvpchgBtFyPBKutCCjDtswLXWBXTOvvCdoeNnYigfaeadhnGuOmPMzYQJOgogxgrNjDZhazJtmpsLLVkQgCxLzqAVLwTcaYgEpUkBziqqOzXrHYGRYCPdWeGngiFfseodVnTuWGIHqcWfroGDIyhUuhahyUldieBnjiWfjeAdnnludKpaVLyzknCyQtpvTVVELTnxbQiqMXOkReqIzWvkpZBABxBjVHuRrFacKdJgKTULwHhnelknZPlTfJyytrgiqXHsFnVdSFFvuinbdSeOfZijnueCdYuHKfrvpGdbjuECDIztLQhzKayTkBOunQQeprmzqAKzXIedCeAnLiyfFeJdBnruuBnEdTetflignSetdjixrtXEhBphwfUTVgtaibxVownFgZObqswyucnsdOeSfCiznleEdMzZUYTtpkfGhxbdqtKHruAFgMBSMdkeXrCpnIyHhHpuzHeoozVvPcZAdvPaFfszPgLXzSZybIodbdseEnsiqfqefdmnduwcIIVyY";
var resulted = "aETaOjMomQRSdoVpEfnzkWFsiyIduDncjTeEkuXnfdketfniqnieNdqXtyfabvhRdQeAnwisfpekdMnsuquASdWmBQHEjAlbSsIjXZuFKJcsJjEBGJsYZZtilkJwsxTPzktotPScXtdNacGoVQqeysWBTIAeAZMiGWTBvuinqdzezfEiDnJeXdRqSVqlzefTqKnDEoXbiUuVAlESeYXCVhTYdMaUuARuJnpdKeifdienneidfXesdEnhumrYIgHPwMTuDBcsrYAQFAwJGQgSRWrTBLSYskmksKSvuuqnHdeebftionDeGdIHlrgCaBbkfqjuOnodgeyfriVnReIdNbebBtpJZOETnjODpHLLAXBjBRNxJlmZexqxBUasOolZdZetnRiJfreBdDnlutRDourDivWTZOgzxlYihgfPDqKPGlScODyPDyQDpxfuNnldletfTiunaeQdOVdqYFMqTURkurdFeynaiffTeidGnWuIkWEHKVBxdXeAnliofIeEdXnjuqzWPGQSIMWXFAwPSMsEttWgnSxfSBudXSIvfHZNwCpEZvuQjvpchgBtFyPBKutCCjDtswLXWBXTOvvCdoeNnYigfaeadhnGuOmPMzYQJOgogxgrNjDZhazJtmpsLLVkQgCxLzqAVLwTcaYgEpUkBziqqOzXrHYGRYCPdWeGngiFfseodVnTuWGIHqcWfroGDIyhUuhahyUldieBnjiWfjeAdnnludKpaVLyzknCyQtpvTVVELTnxbQiqMXOkReqIzWvkpZBABxBjVHuRrFacKdJgKTULwHhnelknZPlTfJyytrgiqXHsFnVdSFFvuinbdSeOfZijnueCdYuHKfrvpGdbjuECDIztLQhzKayTkBOunQQeprmzqAKzXIedCeAnLiyfFeJdBnruuBnEdTetflignSetdjixrtXEhBphwfUTVgtaibxVownFgZObqswyucnsdOeSfCiznleEdMzZUYTtpkfGhxbdqtKHuFMSderpIHHuHozvcAvafzgXSyIddenifednucIyYVIwdmfqqsEsbobZzLPsFPdZPVoezphynCXkMBgAr";

//reverse the string
var stringReverser = function( string ) {
  var stringHolder = string;
  //holds the left over string if original string is over 1000 characters
  var leftOver = "";
  var maxChar = 1000;
  var arrayHolder = stringHolder.split( "" );
  //get length of string here otherwise the length will be reduced each iteration
  var stringLength = arrayHolder.length;
  var resultArray = [];
  var i = 0;

  while( i < stringLength && i < maxChar ) {
    //reverse the array
    arrayHolder.reverse();
    //put first element of that array into new array and delete first element from old array
    resultArray.push( arrayHolder.shift() );
    i++;
  }
  //turn array back into string
  leftOver = arrayHolder.join( "" );
  stringHolder = resultArray.join( "" );
  //return the string
  return stringHolder + leftOver;
};

var isEquals = function( test, expected ) {
  var testArray = test.split( "" );
  var expectedArray = expected.split( "" );
  var wrongIndex = "-1";
  for( var i = 0; i < expectedArray.length; i++ ) {
    if( testArray[ i ] !== expectedArray[ i ] ) {
      wrongIndex = i;
      break;
    }
  }
  return wrongIndex;
};

//output the string reversed
stringReverser( test );
console.log( test.length );
console.log( isEquals( stringReverser( test ), expected ) );
console.log( isEquals( resulted, expected ) );
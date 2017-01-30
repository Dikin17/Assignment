var calModule = angular.module("myModule",[]);
calModule.controller("cal",calFn);

function calFn($scope)
{
    
    $scope.displayOutput=''; // Display Output 
    $scope.operator=''; // stores operation 
    $scope.temp1=''; 
    $scope.temp2='';

    $scope.updateDisplay = function(temp) // Updating Display 
    {
        if($scope.operator=='^') //Splitting the displayOutput for power operation
        {
          $scope.temp2=$scope.temp2+temp;
        }
        $scope.displayOutput=$scope.displayOutput+temp;
    }
  
    $scope.updateDisplay1 = function(temp) // For special operation such as power and square
    {
        if(temp=='sqrt')
        {
            $scope.sqrt();
        }else
        {
            $scope.temp1=$scope.displayOutput; 
            $scope.operator=temp;
            $scope.displayOutput=$scope.displayOutput+temp;
        } 
    }
    
     $scope.calculate = function() // Assigning an operation
     {
       
            if($scope.operator === '^')  
            {
                    $scope.power();
            }else   $scope.basic();
        }
         
    
  
    $scope.basic = function() // Calculating basic operation
    {
        $scope.displayOutput=$scope.$eval($scope.displayOutput);
        $scope.cleanMemory();
    }
  
    $scope.power = function() // Calculating Power 
    {
        $scope.displayOutput= Math.pow($scope.temp1,$scope.temp2);
        $scope.cleanMemory();
    } 

    $scope.sqrt = function() // Calculating square 
    {
        $scope.displayOutput= Math.sqrt($scope.displayOutput);
        $scope.cleanMemory();
    }
    $scope.clearScreen = function() // Clearing the Display
    {
      
      $scope.displayOutput='';
      $scope.cleanMemory();
    }
    $scope.cleanMemory = function() // Clearing a scope memory
    {
       $scope.operator='';
       $scope.temp1='';
       $scope.temp2='';
    }

}
    

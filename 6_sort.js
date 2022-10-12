var i=4 
var j= -3
var k= 7
if (i>j && i>k)
{
        if (j>k)
        {
           alert(i + ", " + j + ", " +k);
        }
        else
        {
           alert(i + ", " + k + ", " +j);
        }
}
else if (j>i && j >k)
{
        if (i>k)
        {
            alert(j + ", " + i + ", " +k);
        }
        else
        {
            alert(j + ", " + k + ", " +i);
        }
}
else if (k>i && k>j)
{
        if (i>j)
        {
           alert(k + ", " + i + ", " +j);
        }
        else
        {
           alert(k + ", " + j + ", " +i);
        }
}        
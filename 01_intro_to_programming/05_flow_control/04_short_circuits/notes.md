# Short Circuits

The Logical && operator and the Logical || operator both use short circuit evaluation to evaluate their operands. This means that the expression only needs enough information to determine the final value.

<br>

If using the && operator where both operands need to evaluate to true to return true then if the first operand evaluates to false then the expression short circuits and returns false because evaluating the second operand further will not change the result. 

If using the || operator then only 1 operand needs to be true to return true and so if that is the first operand there is no need to evaluate the second operand before the expression can evaluate to true and thus the expression will short circuit when it can determine the final expression value. 


class Solution {
public:
    vector<int> searchRange(vector<int>& nums, int target) {
        int start=-1,end=-1;
        int n=nums.size();
        
        //find the first index 
        for(int i =0; i<n;i++){
            if(nums[i]==target){
                start=i;
                break;
            }
        }
        //finding the end index
        for(int i =n-1; i>=0;i--){
            if(nums[i]==target){
                end=i;
                break;
            }
        }
        return {start,end};
    }
};